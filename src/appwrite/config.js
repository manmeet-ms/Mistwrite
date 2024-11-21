import conf from "../conf/conf.js";
import { Client, Account, Databases, ID, Storage, Query } from "appwrite";
export class AppwriteNoteService {
  client = new Client();
  database;
  bucket;
  constructor() {
    // 🪶: auto runs, first whena class is created
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.database = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createNote(data) {
    try {
      return await this.database.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        ID.unique(),
        data
      );
    } catch (error) {
      // alert(error);
      console.error('Error creating note:', error);
      throw error;
    }
  }
  
  async updateNote(documentId, data) {
    try {
      return await this.database.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        documentId,
        data
      );
    } catch (error) {
      // alert(error);
      console.error('Error updating note:', error);
      throw error;
    }
  }

  // ----  CREATES A NOTE BASED UPON GIVEN PARAMETERS ----
  // async createNote({ title, slug=ID.unique(), content, status="Burn", userId }) {
  //   try {
  //     return await this.database.createDocument(
  //       conf.appwriteDatabaseId,
  //       conf.appwriteCollectionId,
  //       slug,
        
  //       {
  //         title,
  //         content,
  //         status,
  //         userId,
  //       }
  //     );
  //   } catch (errorFound) {
  // alert(errorFound);
  //     console.log(
  //       "Appwrite-NoteService error :: at createNote() :: ",
  //       errorFound
  //     );
  //   }
  // }
  //----   DISPLAYS A SINGLE NOTE BASED UPON GIVEN PARAMETERS BY IDENTIFYING ITS ID AS A SLUG ----*/
async readNote(slug) {
    try {
      return await this.database.getDocument(
        appwriteDatabaseId,
        appwriteCollectionId,
        slug
      );
    } catch (errorFound) {
      // alert(errorFound);
      console.log(
        "Appwrite-NoteService error :: at readNote() :: ",
        errorFound
      );
    }
  }
  //----  DISPLAYS EVERY SINGLE NOTE REGARDLESS OF WHETHER STAUS IS SET TO TEMP/PERMANENT ----*/
  async getEveryNote(queries) {
    try {
      const getEveryNoteResult = await this.database.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries // get all notes of currently logged in user
      );
      // console.log("getEveryNoteResult() config.js: ",getEveryNoteResult);
      
      return getEveryNoteResult;
    } catch (errorFound) {
      // alert(errorFound);
      console.log(
        "Appwrite-NoteService error config.js :: at getEveryNote() :: ",
        errorFound
      );
    }
  }
  //----  DISPLAYS ALL SAVED/PERMANENT NOTES ----*/
  async getSavedNotes() {
    try {
      return await this.database.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        [Query.equal("status_idx", ["permanent"])] // queries (optional)
      );
    } catch (errorFound) {
      // alert(errorFound);
      console.log(
        "Appwrite-NoteService error config.js :: at getSavedNotes() :: ",
        errorFound
      );
    }
  }
  //----  DISPLAYS ALL BURNING (TEMPORARY) NOTES ----*/
  async getBurningNotes() {
    try {
      return await this.database.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        [Query.equal("status_idx", ["burn"])] // queries (optional)
      );
    } catch (errorFound) {
      // alert(errorFound);
      console.log(
        "Appwrite-NoteService error config.js :: at getBurningNotes() :: ",
        errorFound
      );
    }
  }
  //----  UPDATES A NOTE BASED UPON GIVEN PARAMETERS BY IDENTIFYING ITS ID AS A SLUG ----*/
  // async updateNote(slug, { title, content, status }) {
  //   try {
  //     return await this.database.updateDocument(
  //       conf.appwriteDatabaseId,
  //       conf.appwriteCollectionId,
  //       // slug,
  //       ID.unique(),
  //       { title, content, status }
  //     );
  //   } catch (errorFound) {
  // alert(errorFound);
  //     console.log(
  //       "Appwrite-NoteService error :: at updateNote() :: ",
  //       errorFound
  //     );
  //   }
  // }
  //----  PERFORMS DELETION OF A NOTE BASED UPON GIVEN PARAMETERS BY IDENTIFYING ITS ID AS A SLUG ----*/
  async deleteNote(noteId) {
    // console.clear()
    console.log("operation executed for note: ",noteId);
    try {
       await this.database.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        noteId       
      );
    } catch (errorFound) {
      // alert(errorFound);
      console.log("Appwrite-NoteService error :: at deleteNote() :: ",errorFound);
      return false;
    }
    return true;
  }
}
const appwriteNoteService = new AppwriteNoteService(); // exported ready-made object of  'class AppwriteNoteService'
export default appwriteNoteService;
