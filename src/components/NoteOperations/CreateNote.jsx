import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import RTE from "../RTE";
import { useDispatch, useSelector } from "react-redux";
import appwriteNoteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import InputwRef from "../InputwRef";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SelectwRef from "../SelectwRef";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const CreateNote = ({ post }) => {
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        /*
        🪶  ?. operator in JavaScript is called the optional chaining operatorIt allows you to safely access nested object properties or call functions on objects that might be null or undefined.
        */
        title: post?.title || "",
        slug: post?.slug || "",
        content: post?.content || "",
        status: post?.status || "burn",
      },
    });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.userData);

  //  if user has aleary had submitted the form (he has come to update the note )
  // hea had passed the data
  const submit = async (data) => {
    if (post) {
      // --- post exits ---
      // data.title
      const NoteInDB = await appwriteNoteService.updateNote(post.$id, {
        ...data,
      });
      if (NoteInDB) {
        navigate(`/n/${post.$id}`); // then redirect it to note page
      }
    } else {
      // --- post does not exits (new note will be created ) ---
      const createNoteInDB = await appwriteNoteService.createNote(
        ...data,
        (userId = userData.$id) // the data we brought from the store, userId will decide kiske khaate me note create hoga (the one who is logged-in simple)
      );
      if (createNoteInDB) {
        console.log("🟩 CreateNotejsx :: submit() ::Note created successfully");
        navigate(`/n/${post.$id}`); // then redirect it to respective note page (well it might not require,
      } // TODO we can redirect to home "/" AFTER CREATION)
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string") {
      const slugMade = value.trim().toLowerCase().replace(/ /g, "-"); // slug 36.01
      setValue("slug", slugMade);
      return slugMade;
    }
  });

  React.useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title, { shouldValidate: true }));
      }
    });
    return () => {
      subscription.unsubscribe(); //memory management, optimisation to preent self calllll
    };
  }, [watch, slugTransform, setValue]);

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <span
            className={`flex flex-col items-center font-medium fixed bottom-24 right-4 text-green-950 bg-green-400 rounded-2xl p-4`}
          >
            {/* <AddOutlined className="" sx={{ fontSize: 24 }} /> */}
            create
          </span>
        </DialogTrigger>
        <DialogContent
          customIcon={true}
          className="sm:max-w-[425px] text-muted-foreground "
        >
          <DialogHeader>
            <DialogTitle className="text-left">
              <div className="flex justify-between">
                <span className="ml-6"> Create Note</span>
              </div>
            </DialogTitle>
            <DialogDescription className="text-left"></DialogDescription>
          </DialogHeader>
          <form>
            <div className="grid gap-4">
              <div className="flex flex-col items-start ">
                <InputwRef
                  {...register("title", { required: true })}
                  id="title"
                  placeholder="Title"
                  // onChange={(e) => setTitle(e.target.value)}

                  // adding slug  transform to pickup value fro title itself
                  onInput={(e) => {
                    setValue(
                      "slug",
                      slugTransform(e.currentTarget.value, {
                        shouldValidate: true,
                      })
                    );
                  }}
                  className="flex  w-full border border-slate-900/0
                text-xl  placeholder:opacity-40 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                />

                {/* our editor */}
                <RTE
                  name="content"
                  control={control}
                  defaultValue={getValues("content")}
                />

// TODO we can make it a togglable option 
// TODO or use select to select between different durations apart from default (12h)
<Select> // TODO make SelectwRef, keys will passed b values, map lagega, register syntax in made component 
    
      <SelectTrigger className="w-full">
        <SelectValue placeholder="" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>State</SelectLabel>
          <SelectItem value="Keep">Keep</SelectItem>
          <SelectItem value="Burn">Burn</SelectItem>
         
        </SelectGroup>
      </SelectContent>
    </Select>

              </div>
            </div>
          </form>
          <DialogFooter>
            <Button type="submit"> {post? "Update": "Create"} </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CreateNote;
