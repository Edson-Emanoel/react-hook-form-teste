"use client";

import "./FormStyle.css";
import Input from "./Input";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register, // Mapeia o elemento, no caso os inputs
    formState: { errors }, // Contem os erros
    handleSubmit, // Envia o formulário
    reset, //Reseta o formulário
  } = useForm();

  const handleRegister = (data: any) => {
    console.log(
      "Nome: " + data.name + " Tipo: " + data.type + " Região: " + data.region
    );
    alert("Pokémon Cadastrado com Sucesso!");
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(handleRegister)}
      className="gap-5 flex items-center flex-col w-full px-10 py-10"
    >
      <h1 className="text-2xl font-semibold text-center">
        Prática do React-Hook-Form
      </h1>

      <div className="flex flex-col w-full">
        <label>Nome do Pokémon</label>

        <Input
          {...register("name", { required: "O nome do pokémon é obrigatório", min: 3, max:22 })}
          errorMessage={errors?.name?.message}
        />
      </div>

      <div className="flex flex-col w-full">
        <label>Tipo do Pokémon</label>

        <Input
          {...register("type", { required: "O tipo do pokémon é obrigatório", min: 3, max: 10 })}
          errorMessage={errors?.type?.message}
        />
      </div>

      <div className="flex flex-col w-full">
        <label>Região do Pokémon</label>

        <Input
          {...register("region", { required: "A região do pokémon é obrigatória", min: 5, max: 6 })}
          errorMessage={errors?.region?.message}
        />
      </div>

      <button
        type="submit"
        className="bg-green-500 text-sm font-semibold w-1/4 h-9 rounded-md"
      >
        Cadastrar
      </button>
    </form>
  );
};

export default Form;
