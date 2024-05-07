import Swal from 'sweetalert2'

const ErrorApi = () => {
    Swal.fire({
        icon: 'error',
        title: 'Erro de Conexão',
        text: 'O sistema tem um erro na API. Por favor, entre em contato com o suporte e tente novamente mais tarde.',
        confirmButtonText: 'OK'
    });
}
const CadastroSuccess = () => {
    Swal.fire({
        icon: 'success',
        title: 'Cadastro realizado com sucesso!',
        text: 'Seu cadastro foi concluído com sucesso.',
        confirmButtonText: 'OK'
    });
}
const ErrorDados = () => {
    Swal.fire({
        icon: 'error',
        title: 'Erro!',
        text: 'Por favor, preencha todos os campos do formulário.',
        confirmButtonText: 'OK'
    });
}

const ExcluirAnimal = () => {
    Swal.fire({
        icon: 'warning',
        title: 'Tem certeza?',
        text: 'Você tem certeza que deseja excluir este animal?',
        showCancelButton: true,
        confirmButtonText: 'Sim, excluir!',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            // Se confirmado, aqui você pode adicionar a lógica para excluir o animal
            Swal.fire('Excluído!', 'O animal foi excluído com sucesso.', 'success');
        }
    });
}

const EmailDuplicado = () => {
    Swal.fire({
        icon: 'error',
        title: 'Email já cadastrado',
        text: 'O email informado já está cadastrado. Por favor, insira outro email.',
        confirmButtonText: 'OK'
    });
}

const AdocaoSuccess = () => {
    Swal.fire({
        icon: 'success',
        title: 'Adoção realizada com sucesso!',
        text: 'Parabéns! Você adotou um novo amigo. Desejamos a você e ao seu novo companheiro muitas felicidades juntos!',
        confirmButtonText: 'OK'
    });
}

const LoginError = () => {
    Swal.fire({
        icon: 'error',
        title: 'Login mal sucedido',
        text: 'O email ou senha inseridos estão incorretos. Por favor, verifique suas credenciais e tente novamente.',
        confirmButtonText: 'OK'
    });
}

export { ErrorApi, CadastroSuccess, ErrorDados, ExcluirAnimal, EmailDuplicado, AdocaoSuccess ,LoginError} 