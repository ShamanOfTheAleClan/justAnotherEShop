import React, { useState } from "react";
import Modal from "react-modal";
import c from "./CreateProductModal.module.css";
import { random } from "faker";

export const CreateProductModal = ({ isModalOpen, toggleModal }) => {
   const [formState, setFormState] = useState({
      name: "",
      description: "",
      price: "",
      quantity: 0,
      image: "",
      id: random.uuid()
   });

   const inputChangeHandler = (formStateKey, e) => {
      setFormState({
         ...formState,
         [formStateKey]: e.target.value
      });
   };

   const generateDescriptionHandler = e => {
      e.preventDefault();
      setFormState({
         ...formState,
         description: random.words(50)
      });
   };

   const formSubmitHandler = async e => {
      e.preventDefault();
      if (validate()) {
         const response = await fetch("http://localhost:3004/products", {
            method: "POST",
            header: {
               "Content-type": "application/json"
            },
            body: JSON.stringify(formState)
         });
      } else {
         alert("Form is invalid");
      }
   };

   const validate = () => {
      let isFormValid = true;
      if (!formState.name || formState.name.length < 5) {
         isFormValid = false;
      }
      return isFormValid;
   };

   return (
      <Modal
         isOpen={isModalOpen}
         onRequestClose={toggleModal}
         ariaHideApp={false}
      >
         <form className={c.form} onSubmit={formSubmitHandler}>
            <label className={c.label} htmlFor="name">
               Product name
               <input
                  className={c.input}
                  type="text"
                  id="name"
                  value={formState.name}
                  onInput={e => inputChangeHandler("name", e)}
               />
            </label>
            <label className={c.label} htmlFor="description">
               Description
               <textarea
                  className={c.textarea}
                  id="description"
                  value={formState.description}
                  onInput={e => inputChangeHandler("description", e)}
               />
               <button
                  className={c.button}
                  onClick={generateDescriptionHandler}
               >
                  Generate description
               </button>
            </label>
            <label className={c.label} htmlFor="price">
               Price
               <input
                  className={c.input}
                  type="number"
                  id="price"
                  value={formState.price}
                  onInput={e => inputChangeHandler("price", e)}
               />
            </label>
            <label className={c.label} htmlFor="quantity">
               Quantity
               <input
                  className={c.input}
                  type="number"
                  id="quantity"
                  value={formState.quantity}
                  onInput={e => inputChangeHandler("quantity", e)}
               />
            </label>
            <div className={c.buttons}>
               <button className={c.button}>Cancel</button>
               <button className={c.button}>Create</button>
            </div>
         </form>
      </Modal>
   );
};
