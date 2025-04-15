import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';


const LoginForm = () => {
  const navigate = useNavigate();
  // Estado para armazenar os valores dos campos
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // Estado para armazenar erros de validação
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });

  // Estado para controlar se o formulário foi enviado
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Função para validar o email
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Função para validar o formulário
  const validateForm = () => {
    let valid = true;
    const newErrors = {
      email: '',
      password: ''
    };

    // Validação do email/usuário
    if (!formData.email.trim()) {
      newErrors.email = 'Usuário é obrigatório';
      valid = false;
    } else if (formData.email !== 'spotmkt' && !validateEmail(formData.email)) {
      newErrors.email = 'Digite um usuário ou email válido';
      valid = false;
    }

    // Validação da senha
    if (!formData.password) {
      newErrors.password = 'Senha é obrigatória';
      valid = false;
    } else if (formData.password.length < 3 && formData.password !== '123') {
      newErrors.password = 'A senha deve ter pelo menos 3 caracteres';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // Handler para submissão do formulário
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Validação com dados estáticos
      if (formData.email === 'spotmkt' && formData.password === '123') {
        console.log('Login válido!');
        localStorage.setItem('isAuthenticated', 'true');
        setIsSubmitted(true);
        // Redirect to dashboard after a short delay
        setTimeout(() => {
          navigate('/dashboard');
        }, 1500);
      } else {
        alert('Credenciais inválidas. Tente novamente.');
        setFormData({
          email: '',
          password: ''
        });
      }
    }
  };

  // Handler para mudança nos campos
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Limpa o erro quando o usuário começa a digitar novamente
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  // Se o formulário foi enviado com sucesso
  if (isSubmitted) {
    return (
      <div className="login-container flex items-center justify-center h-screen bg-gray-100">
        <div className="login-card bg-white p-8 rounded shadow-md w-96">
          <div className="success-container flex flex-col items-center justify-center">
            <i className="fas fa-check-circle text-green-500 text-5xl mb-4"></i>
            <h3 className="success-title text-2xl font-semibold text-gray-800 mb-2">Login realizado com sucesso!</h3>
            <p className="success-message text-gray-600">Você será redirecionado em instantes.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='block-login flex flex-col md:flex-row'>
      <div className="foto-esquerda md:w-1/2">
        <img
          src="https://spotmkt.com.br/wp-content/uploads/2023/02/Marketing-Digital-SPOT.webp"
          alt="Login Illustration"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <div className="login-form-container">
          <img
            src="https://spotmkt.com.br/wp-content/uploads/2023/05/Logo-SPOT-MKT-300x70.png"
            alt="Login Illustration"
            className="w-full h-32 md:h-64 object-cover rounded-lg mb-6"
            loading="lazy"
          />
          <p className="login-title mt-5">Faça login com suas credenciais </p>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="login-input-group">
              <label htmlFor="username">Usuário</label>
              <input
                type="text"
                name="email"
                id="username"
                value={formData.email}
                onChange={handleChange}
                placeholder=""
              />
              {errors.email && <div className="error-message">{errors.email}</div>}
            </div>
            <div className="login-input-group">
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                placeholder=""
              />
              {errors.password && <div className="error-message">{errors.password}</div>}
              <div className="login-forgot">
                <a rel="noopener noreferrer" href="#">Esqueceu a sua senha?</a>
              </div>
            </div>
            <button className="login-sign" type="submit">Entrar</button>
          </form>
          <div className="login-social-message">
            <div className="login-line"></div>
            <p className="login-message">Faça login com</p>
            <div className="login-line"></div>
          </div>
          <div className="login-social-icons">
            <button aria-label="Log in with Google" className="login-icon">
              <i className="fab fa-google fa-lg"></i>
            </button>
            <button aria-label="Log in with Twitter" className="login-icon">
              <i className="fab fa-twitter fa-lg"></i>
            </button>
            <button aria-label="Log in with GitHub" className="login-icon">
              <i className="fab fa-github fa-lg"></i>
            </button>
          </div>
          <div className="flex flex-col items-center justify-center space-y-1 text-center sm:flex-row sm:space-x-2 sm:space-y-0 w-full">
            <p className="text-gray-600">Não tem uma conta?</p>
            <p>
              <a
                rel="noopener noreferrer"
                href="#"
                className="font-medium text-blue-600 transition-colors hover:text-blue-800 hover:underline"
              >
                Crie agora
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;