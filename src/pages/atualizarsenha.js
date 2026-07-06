import { useState } from "react";
import "../components/register.css";
import axios from "axios";
function Atualizar() {
    const [email, setEmail] = useState('');
    const [novaSenha, setNovaSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    
    const manipularEmail = (e) => { //nameHandler
        setEmail(e.target.value);
        console.log(email)
    };
    const manipularNovaSenha = (e) => { //nameHandler
        setNovaSenha(e.target.value);
        console.log(novaSenha)
    };
    const manipularConfirmarSenha = (e) => { //nameHandler
        setConfirmarSenha(e.target.value);
        console.log(confirmarSenha)
    };

    const manipularBotao = async () => {
        try {
            const response = await
                axios.put('http://localhost:5000/atualizar', {
                     email,
                    novaSenha,
                   confirmarSenha,
                });
                console.log(response.data);
                alert('Senha atualizada com sucesso!');
        }
        catch (e) { }}
 
        return (
            <form className="formRegistro">Registrar nova senha
                
                <label className="labelRegistro" >E-mail</label>
                <input className="inputRegistro" onChange={manipularEmail}></input>
                <label className="labelRegistro">Nova Senha</label>
                <input className="inputRegistro" onChange={manipularNovaSenha}></input>
                <label className="labelRegistro">Confirmar Senha</label>
                <input className="inputRegistro" onChange={manipularConfirmarSenha}></input>
                <button className="buttonRegistro" onClick={manipularBotao} > Enviar </button>
            </form>
        )
    }

    export default Atualizar;