'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'


export default function Cadastro() {

    const route = useRouter();
    const [nome, setNome] = useState();
    const [curso, setCurso] = useState();
    const [num_inscricao, setNum_inscricao] = useState();


    const cadastrar = (e) => {
        e.preventDefault()
        const aluno = {
            nome: nome,
            curso: curso,
            num_inscricao: num_inscricao
        }

        const alunoJson = JSON.stringify(aluno);

        fetch("http://localhost:3003/alunos", {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: alunoJson
        }).then(function(){ route.push("/")}).catch(()=> console.log("Não foi possível cadastrar!"))
    }
    return (
        <div>
            <main className="flex-1 p-6 font-mono">
        <form className="ml-10" method="post" encType="multipart/form-data" onSubmit={cadastrar}>
            <h1 className="font-semibold text-2xl mt-10 mb-5 text-white">Formulário de Cadastrar:</h1>
            
            <input className="text-white mt-5 mb-10 w-80 border-b bg-zinc-950" type="text" placeholder="Nome do aluno" nome="nome" 
            required onChange={e => setNome(e.target.value)}/><br/>

        

            
            <input className="text-white mt-5 mb-10 w-80 border-b bg-zinc-950" type="text" placeholder="Curso" nome="curso" 
            required onChange={e => setCurso(e.target.value)}/><br/>

            <input className="text-white mt-5 mb-10 w-80 border-b bg-zinc-950" type="text" placeholder="Numero de inscrição" nome="curso" 
            required onChange={e => setNum_inscricao(e.target.value)}/><br/>

            <label className="font-semibold mt-10 mb-5 text-white">Foto do Aluno:</label><br/>
            <input className="mt-5" type="file"/><br/>
           
            
            <button type="submit" className="border w-80 h-14 mt-10 mb-10 text-white hover:bg-zinc-800">Cadastrar</button><br/>
            <a className="border p-4 mt-20 text-white hover:bg-zinc-800" href='/'>Voltar</a>
            </form> 
           
           
</main>
           
                
                
                
                
           
        </div>

    );

}