
// import 'dotenv/config'
const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    tinymceApiKey: String(import.meta.env.VITE_TINYMCE_API_KEY),
    
};

// for github actions
// const conf = {
//     appwriteUrl: String(process.env.APPWRITE_URL),
//     appwriteProjectId: String(process.env.APPWRITE_PROJECT_ID),
//     appwriteDatabaseId: String(process.env.APPWRITE_DATABASE_ID),
//     appwriteCollectionId: String(process.env.APPWRITE_COLLECTION_ID),
//     appwriteBucketId: String(process.env.APPWRITE_BUCKET_ID),
// };
export default conf;
