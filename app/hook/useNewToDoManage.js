import React from "react";

import useAsyncStorageCRUD from "@hook/useAsyncStorageCRUD";
export default function useNewToDoManage() {
    const [title, titleChange]= React.useState("");
    const [description, descriptionChange]= React.useState("");

    const{toDoCreate}=useAsyncStorageCRUD();

    const fieldsTab=[
        {
        value: title,
        onChange:(e)=> titleChange(e),
        placeholder:"Nom du produit"
    },
         {
             value: description,
             onChange:(e)=> descriptionChange(e),
             placeholder:"Quantité" }
    ];

    async function handleSubmit() {
        if (title.length === 0) {
            return alert("Il manque le nom du produit");
        }
        // if (description.length === 0){
        //     return alert("Il manque la quantité de produit");
        // }
        await toDoCreate({title, description, checked:false});
        titleChange("");
        descriptionChange("");
    }

    return {fieldsTab, handleSubmit};

}