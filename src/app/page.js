'use client'
import "/src/app/globals.css"
import { useRouter } from 'next/navigation';
import Link from 'next/link'
export default async function Home() {
  const router = useRouter();
  const req= await fetch("http://localhost:3003/alunos",{
  cache: "no-cache"
});
  const alunos = await req.json();
 
  const remover = async (id) => {
    try {
      await fetch("http://localhost:3003/alunos/" + id, {
        method: "DELETE"
      })
      router.refresh()
    } catch {
      alert.arguments("Não foi possivél remover!")
    }
  }
  return ( 
   
    <main className="flex  flex-col items-center justify-between p-2 font-mono">
     <div className="text-white mt-5 grid grid-flow-col gap-x-2">
      <h1 className="font-semibold text-xl flex items-center text-white ml-5 mr-8 p-6">Nome</h1>
      <h1 className="font-semibold text-xl flex items-center text-white mr-4 p-6">Inscrição</h1>
      <h1 className="font-semibold text-xl flex items-center text-white mr-8 p-6">Curso</h1>
     <Link href="/cadastro" className="text-white border p-5 hover:bg-zinc-800 ">Cadastro</Link>
     </div>
      {alunos.map(aluno=>
        <div key={aluno.id} className="text-white mt-10 grid grid-flow-col gap-x-2">
            <p className="border p-6 hover:bg-zinc-800 ml-9">{aluno.nome}</p>
            <p className="border p-6 hover:bg-zinc-800 ml-9">{aluno.num_inscricao}</p>
            <p className="border p-6 hover:bg-zinc-800 ml-9">{aluno.curso}</p>

            <button className="border p-6 hover:bg-zinc-800 ml-9" onClick={e => e.preventDefault(remover(aluno.id))}>REMOVER</button>
           </div>
           )}
           
    </main>
  )
}

