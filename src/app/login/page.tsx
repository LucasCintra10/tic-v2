import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <Image src="/vector9.svg" alt="Ilustração" width={300} height={300} className="absolute top-0 right-0" />
      <Image src="/vector10.svg" alt="Ilustração" width={300} height={300} className="absolute bottom-0 left-0" />

      <div className="w-500 h-500 bg-c4 rounded-xl flex flex-col  items-center  ">
        <div className="flex flex-col justify-center items-center my-12 ">
          <Image src="/logo.svg" alt="Logo" width={100} height={95} />
          <Image src="ordinis.svg" alt="Ordinis" width={167} height={27} />
        </div>
        <form className="w-96 flex flex-col items-center gap-6">
          <input type="email" placeholder="E-mail" className="w-full h-12 rounded-xl p-2 box-border" />
          <input type="password" placeholder="Senha" className="w-full h-12 rounded-xl p-2 box-border" />
          <button className="w-44 h-12 rounded-xl bg-btn-pattern text-white font-bold text-xl">Entrar</button>
          <Link href="/forgot" className="text-c3 opacity-1">Esqueceu a senha?</Link>
        </form>

      </div>
    </main>
  );
}
