import Image from "next/image";
import { Button } from "../_components/ui/button";
import { LogInIcon } from "lucide-react";

const LoginPage = () => {
    return (  
        <div className ="grid grid-cols-2 h-full">
            <div className="flex flex-col h-full justify-center max-w-[550px] mx-auto">
                <Image src="/images/logo-login.svg" alt="finance ai" width={173} height={39} className="mb-8"/>
                <h1 className="mb-3 text-4xl font-bol">Bem vindo</h1>
                <p className="mb-8 text-muted-foreground">
                    A Finance AI é uma plataforma de gestão financeira que utiliza IA para
                    monitorar suas movimentações, e oferecer insights personalizados,
                    facilitando o controle do seu orçamento.
                </p>
                <Button variant="outline">
                    <LogInIcon className="mr-2"/>
                    Fazer login ou criar conta
                </Button>
            </div>
                

            <div className="relative h-full w-full">
                <Image src="/images/login.png" alt="Faça Login" fill className="object-cover" />
            </div>
        </div>
    );
}
 
export default LoginPage;