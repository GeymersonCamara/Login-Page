import { useState, FormEvent } from 'react';
import { LoginData } from '../../types/auth';
import './Login.css';

export function Login() {
  const [formData, setFormData] = useState<LoginData>({
    email: '',
    password: '',
  });

  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (!formData.email || !formData.password) {
      setError('Preencha todos os campos');
      return;
    }

    if (formData.password.length < 6) {
      setError('A senha deve ter no mínimo 6 caracteres');
      return;
    }

    // Simulação de autenticação
    if (
      formData.email === 'admin@email.com' &&
      formData.password === '123456'
    ) {
      setSuccess(true);
    } else {
      setError('E-mail ou senha inválidos');
    }
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        {error && <span className="error">{error}</span>}
        {success && <span className="success">Login realizado com sucesso!</span>}

        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Senha"
          value={formData.password}
          onChange={handleChange}
        />

        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
