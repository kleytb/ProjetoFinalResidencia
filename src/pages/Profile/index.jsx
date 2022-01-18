import React, { useEffect, useState } from 'react';

import profilePic from '../../images/ProfilePic.png'
import { MdOutlineImageNotSupported } from 'react-icons/md'
import { IoMdEye, IoMdEyeOff } from 'react-icons/io'
import { RiUserUnfollowLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

import Dropzone from 'react-dropzone'

import api from '../../service/api'

import './styles.css';

function Profile() {
    const USER_ID = 10

    const [user, setUser] = useState({})

    const [passwordIsVisible, setPasswordIsVisible] = useState(false)
    const [newPasswordIsVisible, setNewPasswordIsVisible] = useState(false)

    const [telephoneValue, setTelephoneValue] = useState('')
    const [nameValue, setNameValue] = useState('')
    const [userImage, setUserImage] = useState('')
    const [password, setPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')

    const [inputPasswordBorder, setInputPasswordBorder] = useState('#000')
    const [inputNewPasswordBorder, setInputNewPasswordBorder] = useState('#000')

    const navigation = useNavigate()

    function validateNameInput(event) {
        let inputValue = event.target.value

        setNameValue(inputValue.replace(/[^A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ\s]/g, ""))
        // "^" Negação
        // "A-Z" Letras entre a e z maiúscula
        // "a-z" Letras entre a e z minúsculas
        // "áàâãéè..." letras com acentos e outros caracteres
        // "\s" espaço
        // "g" todas
    }

    function telephoneMask(event) {
        let key = event.nativeEvent.data;
        let inputValue = event.target.value

        if (isNaN(key) || key === " ") {
            let splitedValue = inputValue.split('')
            splitedValue.pop()

            return setTelephoneValue(splitedValue.join(''))
        }


        if (inputValue.length === 2 && key !== null) {
            return setTelephoneValue(inputValue + " ")

        } else if (inputValue.length === 8 && key !== null) {
            return setTelephoneValue(inputValue + "-")
        }

        setTelephoneValue(inputValue)

    }

    function formatTelephone(telephone) {

        let tell = telephone.split("")
        tell.splice(2, 0, " ")
        tell.splice(8, 0, "-")

        return tell.join('')
    }

    function unformatTelephone(telephone) {
        return telephone.replace(/[-\s]/g, "")
    }

    async function uploadImage(file) {
        console.log(file[0])

        let data = new FormData()
        data.append('file', file[0])

        let imageUrl = await api.post(`/api/image/${USER_ID}`, data)

        setUserImage(imageUrl.data)
    }

    async function removeProfilePic() {
        api.delete(`/api/image/${USER_ID}`)

        setUserImage(null)
    }

    async function updateUser() {
        
        if (password) {
            let passwordIsCorrect = await api.post(`/api/verifyPassword/${USER_ID}/${password}`)
            passwordIsCorrect = passwordIsCorrect.data

            if (!passwordIsCorrect) {
                setInputPasswordBorder('#ad0d0d')
                return;
            }

            if (newPassword.length < 5) {
                setInputNewPasswordBorder('#ad0d0d')
                return;
            }
            
            await api.put(`/api/atualizarPessoas/${USER_ID}`, {
                nome: nameValue,
                email: user.email,
                senha: newPassword,
                telefone: unformatTelephone(telephoneValue),
                foto: userImage,
                funcao: user.funcao.id
            })
            
            navigation('/teams')
            return
        };





        if (newPassword) {
            setInputPasswordBorder('#ad0d0d')
            return;
        }

        await api.put(`/api/atualizarPessoas/${USER_ID}`, {
            nome: nameValue,
            email: user.email,
            senha: 'same1',
            telefone: unformatTelephone(telephoneValue),
            foto: userImage,
            funcao: user.funcao.id
        })

        navigation('/teams')
    }

    async function deleAccount() {

        Swal.fire({
            title: 'Tem certeza?',
            text: "Essa ação não pode ser desfeita!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#05B1A1',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim, deletar conta!',
            cancelButtonText: 'Cancelar'
        }).then(async (result) => {
            if (result.isConfirmed) {
                await api.delete(`/api/delatarPessoas/${USER_ID}`)

                Swal.fire(
                    'Deletada!',
                    'Sua conta foi deletada.',
                    'success'
                ).then(() => {
                    navigation('/')
                })
            }
        })
    }


    useEffect(() => {

        async function loadUserData() {
            let userResponse = await api.get(`/api/pessoasPorId/${USER_ID}`)

            setNameValue(userResponse.data.nome)
            setUserImage(userResponse.data.foto)
            setTelephoneValue(formatTelephone(userResponse.data.telefone))

            setUser(userResponse.data)
        }

        loadUserData()
    }, [])

    return (
        <div id="profile-contaier">

            <section className='profile-sections' id="profile-firts-section">
                <div id='profile-name'>
                    <h1>Minha Conta</h1>

                    <div>
                        <strong>Nome</strong>
                        <input
                            className='profile-input'
                            id='input-name'
                            value={nameValue}
                            type="text"
                            onChange={e => validateNameInput(e)}
                        />
                    </div>
                </div>

                <div id='profile-pic-container'>

                    <Dropzone accept="image/*" onDropAccepted={(file) => uploadImage(file)}>

                        {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
                            <div
                                id="profile-dropzone"
                                {...getRootProps()}
                                isDragActive={isDragActive}
                                isDragReject={isDragReject}
                            >
                                <img
                                    id='profile-pic'
                                    src={userImage ? `http://169.57.150.59:8012/images/${userImage}` : profilePic}
                                    alt="Foto do usuário"
                                />

                                <input {...getInputProps()} />
                            </div>
                        )}
                    </Dropzone>

                    <span onClick={removeProfilePic}> <MdOutlineImageNotSupported size={20} /> Remover foto</span>
                </div>
            </section>



            <section className='profile-sections' id="profile-second-section">
                <strong>Email</strong>
                <span>{user.email}</span>
            </section>



            <section className='profile-sections' id="profile-third-section">
                <strong>Telefone</strong>
                <input
                    className='profile-input'
                    value={telephoneValue}
                    type="text"
                    onChange={e => telephoneMask(e)}
                    maxLength={13}
                    placeholder='DD XXXX-XXXX'
                />
            </section>



            <section className='profile-sections' id="profile-fourth-section">
                <strong>Senha</strong>

                <div id='fourth-section-inputs-container'>

                    <div className='fourth-section-inputs'>
                        <span>Senha atual</span>
                        <div className='fourth-section-input'>
                            <input
                                onChange={e => {
                                    setPassword(e.target.value)
                                    inputPasswordBorder !== '#000' && setInputPasswordBorder('#000')
                                }}

                                className='profile-input'
                                type={passwordIsVisible ? "text" : "password"}
                                style={{ borderColor: inputPasswordBorder }}
                            />

                            {
                                passwordIsVisible
                                    ? <IoMdEye className='input-eye' onClick={() => setPasswordIsVisible(!passwordIsVisible)} />
                                    : <IoMdEyeOff className='input-eye' onClick={() => setPasswordIsVisible(!passwordIsVisible)} />
                            }
                        </div>
                    </div>

                    <div className='fourth-section-inputs'>
                        <span>Nova senha</span>
                        <div style={{ position: 'relative' }} className='fourth-section-input'>
                            <input
                                onChange={e => {
                                    setNewPassword(e.target.value)
                                    setInputNewPasswordBorder('#000')
                                }}
                                className='profile-input'
                                type={newPasswordIsVisible ? "text" : "password"}
                                style={{ borderColor: inputNewPasswordBorder }}
                            />
                            <span
                                style={{ position: 'absolute', top: '110%', color: '#ad0d0d' }}
                            >
                                {inputNewPasswordBorder !== '#000' && 'Senha deve conter mais de 5 caracteres'}
                            </span>

                            {
                                newPasswordIsVisible
                                    ? <IoMdEye className='input-eye' onClick={() => setNewPasswordIsVisible(!newPasswordIsVisible)} />
                                    : <IoMdEyeOff className='input-eye' onClick={() => setNewPasswordIsVisible(!newPasswordIsVisible)} />
                            }
                        </div>
                    </div>
                </div>
            </section>





            <section className='profile-sections' id="profile-buttnos-container">

                <div id="profile-buttnos">
                    <button onClick={deleAccount}>
                        Excluir conta <RiUserUnfollowLine id='profile-delete-icon' />
                    </button>

                    <button onClick={updateUser}>Sair</button>
                </div>

            </section>


        </div>
    );
}

export default Profile;