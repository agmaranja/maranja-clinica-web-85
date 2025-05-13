
interface EmailData {
  nome: string;
  telefone: string;
  email: string;
  mensagem: string;
}

/**
 * Send email from the contact form
 * In a real environment, this would connect to a backend service
 */
export const sendContactEmail = async (data: EmailData): Promise<boolean> => {
  try {
    // In a real environment, you would call your API endpoint here
    // Example:
    // const response = await fetch('/api/send-email', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     to: 'agmaranja@gmail.com',
    //     subject: `Contato do site - ${data.nome}`,
    //     text: `
    //       Nome: ${data.nome}
    //       Telefone: ${data.telefone}
    //       Email: ${data.email}
    //       Mensagem: ${data.mensagem}
    //     `
    //   }),
    // });
    // return response.ok;

    // For demonstration purposes, we'll log the data and return true
    console.log("Enviando email para agmaranja@gmail.com");
    console.log("Dados do formulário:", data);
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return true;
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return false;
  }
}
