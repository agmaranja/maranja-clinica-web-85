
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Phone, Mail } from "lucide-react";
import Leaf from "@/components/Leaf";
const CallMeForm = () => {
  const {
    toast
  } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    mensagem: ""
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulando envio do formulário
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Formulário enviado!",
        description: "Entraremos em contato em breve.",
        duration: 5000
      });

      // Limpar formulário
      setFormData({
        nome: "",
        telefone: "",
        email: "",
        mensagem: ""
      });
    }, 1000);
  };
  return <section id="ligue-para-mim" className="py-16 md:py-24 bg-gradient-to-b from-maranja-beige to-maranja-cream relative">
      <Leaf position="top-right" size={42} rotation={15} opacity={0.2} leafType="jatoba" className="z-10" />
      <Leaf position="bottom-left" size={36} rotation={-10} opacity={0.25} leafType="ipe" className="z-10" />
      <Leaf position="center-right" size={28} rotation={28} opacity={0.15} leafType="araucaria" className="hidden md:block z-10" />
      <Leaf position="top-left" size={32} rotation={-15} opacity={0.18} leafType="acai" className="hidden lg:block z-10" />
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-maranja-darkblue mb-4">
              Fale Conosco
            </h2>
            <p className="text-maranja-darkblue/70 max-w-xl mx-auto">Preencha o formulário abaixo e entraremos em contato para discutir como podemos ajudar o seu negócio.</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 relative">
            <Leaf position="top-right" size={24} rotation={30} opacity={0.15} leafType="guarana" />
            <Leaf position="bottom-left" size={20} rotation={-20} opacity={0.12} leafType="jatoba" />
            
            <form onSubmit={handleSubmit}>
              <div className="grid gap-6 mb-6">
                <div className="grid gap-2">
                  <Label htmlFor="nome" className="text-maranja-darkblue">
                    Nome
                  </Label>
                  <Input id="nome" name="nome" value={formData.nome} onChange={handleChange} placeholder="Seu nome completo" required className="border-maranja-darkblue/20 focus:border-maranja-darkblue focus:ring-maranja-darkblue" />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="telefone" className="text-maranja-darkblue">
                    Telefone
                  </Label>
                  <Input id="telefone" name="telefone" type="tel" value={formData.telefone} onChange={handleChange} placeholder="(00) 00000-0000" required className="border-maranja-darkblue/20 focus:border-maranja-darkblue focus:ring-maranja-darkblue" />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="email" className="text-maranja-darkblue">
                    E-mail
                  </Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="seu@email.com" required className="border-maranja-darkblue/20 focus:border-maranja-darkblue focus:ring-maranja-darkblue" />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="mensagem" className="text-maranja-darkblue">
                    Mensagem (opcional)
                  </Label>
                  <Textarea id="mensagem" name="mensagem" value={formData.mensagem} onChange={handleChange} placeholder="Como podemos ajudar o seu negócio?" className="min-h-[120px] border-maranja-darkblue/20 focus:border-maranja-darkblue focus:ring-maranja-darkblue" />
                </div>
              </div>
              
              <Button type="submit" className="w-full bg-maranja-darkblue hover:bg-maranja-darkblue/90 text-white" disabled={loading}>
                {loading ? "Enviando..." : "Solicitar contato"}
              </Button>
            </form>
            
            <div className="mt-8 pt-6 border-t border-maranja-darkblue/10">
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <div className="flex items-center gap-2 text-maranja-darkblue">
                  <Phone className="h-5 w-5" />
                  <span>(11) 98240-4879</span>
                </div>
                <div className="flex items-center gap-2 text-maranja-darkblue">
                  <Mail className="h-5 w-5" />
                  <span>agmaranja@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default CallMeForm;
