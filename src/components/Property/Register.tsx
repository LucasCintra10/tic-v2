import React from "react";
import Select from "@/components/Select";
import { Condition } from "@/models/condition";
import api from "@/tools/api";
import { Category } from "@/models/category";
import { Property } from "@/models/property";

const RegisterProperty: React.FC = () => {
  const conditions: Condition[] = [
    { id: 1, name: "Regular" },
    { id: 2, name: "Bom" },
    { id: 3, name: "Ruim" },
  ];

  const [selectedCondition, setSelectedCondition] = React.useState<Condition>(conditions[0]);
  const [categories, setCategories] = React.useState<Category[]>([]);
  const [property, setProperty] =  React.useState({} as Property)

  const getCategories = async () => {
    api
      .get("/categoria/get-all",{
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
      })
      .then((response) => {
        setCategories(response.data);
        console.log(response)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  React.useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      {" "}
      <form className="w-2/5 h-2/3 mt-4 bg-white z-1 rounded-xl z-10 p-4 flex flex-col gap-4 ">
        <div className="w-full h-32 flex justify-between items-center gap-2">
          <label className="text-c5 font-medium ">Placa</label>
          <input type="text" className="w-96 h-full bg-c1 rounded" />
        </div>
        <div className="w-full h-32 flex justify-between items-center gap-2">
          <label className="text-c5 font-medium ">Origem</label>
          <input type="text" className=" w-96 h-full bg-c1 rounded" />
        </div>
        <div className="w-full h-32 flex justify-between items-center gap-2">
          <label className="w-auto text-c5 font-medium ">Descrição</label>
          <input type="text" className="w-96 h-full bg-c1 rounded" />
        </div>
        <div className="w-full h-32 flex justify-between items-center gap-2">
          <label className=" text-c5 font-medium ">Valor</label>
          <input type="text" className="w-96 h-full bg-c1 rounded" />
        </div>
        <div className="w-full h-32 flex justify-between items-center gap-2">
          <label className=" text-c5 font-medium truncate">Localização</label>
          <input type="text" className="w-96 h-full bg-c1 rounded" />
        </div>
        <div className="w-full h-32 flex justify-between items-center gap-2">
          <label className=" text-c5 font-medium truncate">Categoria</label>
          <Select selected={selectedCondition} setSelected={(e) => setProperty({...property, id_categoria: e.target.value })} options={categories} />
        </div>
        <div className="w-full h-32 flex justify-between items-center gap-2">
          <label className=" text-c5 font-medium truncate">Data de Entrada</label>
          <input type="date" className="w-96 h-full bg-c1 rounded text-center" />
        </div>
        <div className="w-full h-32 flex justify-between items-center gap-2">
          <label className=" text-c5 font-medium truncate">Conservação</label>
          <Select selected={selectedCondition} setSelected={setSelectedCondition} options={conditions} />
        </div>
        <button className="w-full h-32  self-center bg-c2 rounded flex justify-center items-center gap-2 text-c5 transition-colors hover:bg-c4 hover:text-c2">
          Cadastrar
        </button>
      </form>
      ;
    </>
  );
};

export default RegisterProperty;
