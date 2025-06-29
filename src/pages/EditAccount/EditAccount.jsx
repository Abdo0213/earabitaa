import React, { useRef, useState } from 'react'
import Header from '../../components/Header/Header'
import style from './EditAccount.module.css'
import PasswordReset from '../../components/PasswordReset/PasswordReset';

const EditAccount = () => {
    const [isResetOpen, setIsResetOpen] = useState(false);
    const fileInputRef = useRef(null);
    const [formData, setFormData] = useState({
        name: 'Ayman Ibrahim',
        email: 'Unmesh@mail.com',
        phone: '1259379328',
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });
    const [imagePreview, setImagePreview] = useState('profile.jpg');

    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Create a preview URL for the image
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
            // You would typically upload the file to your server here
            console.log('Selected file:', file);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validate passwords if they're being changed
        if (formData.newPassword || formData.confirmPassword) {
            if (formData.newPassword !== formData.confirmPassword) {
                alert("New passwords don't match!");
                return;
            }
            if (!formData.currentPassword) {
                alert("Please enter your current password to make changes");
                return;
            }
        }

        // Prepare the data to send (excluding confirmPassword)
        const { confirmPassword, ...submitData } = formData;
        
        console.log('Updating account with:', submitData);
        // Example API call:
        // fetch('/api/update-account', {
        //     method: 'PUT',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Authorization': `Bearer ${yourAuthToken}`
        //     },
        //     body: JSON.stringify(submitData),
        // })
        // .then(response => response.json())
        // .then(data => {
        //     console.log('Success:', data);
        //     // Show success message or redirect
        // })
        // .catch((error) => {
        //     console.error('Error:', error);
        // });
    };

    return (
        <>
            <Header 
                header="Edit"
                backNavigationPath="/account"
            />
            <div className={style.container}>
                <div className={style.header}>
                    <img src={imagePreview} alt='profile' className={style.image} />
                    <img src='changePhotoIcon.svg' alt='change' className={style.changeIcon} onClick={handleImageClick} />
                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept="image/*"
                        style={{ display: 'none' }}
                    />
                </div>
                <form className={style.accountForm} onSubmit={handleSubmit}>
                    <div className={style.inputGroup}>
                        <label>Name</label>
                        <input 
                            className={style.inputField} 
                            type='text' 
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                            placeholder='Enter your name'
                        />
                    </div>
                    <div className={style.inputGroup}>
                        <label>Email Address</label>
                        <input 
                            className={style.inputField} 
                            type='email' 
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            placeholder='Enter your email'
                        />
                    </div>
                    <div className={style.inputGroup}>
                        <label>Phone Number</label>
                        <span className={style.codeNumber}>(+2)</span> 
                        <input 
                            className={style.inputField} 
                            type='text' 
                            name='phone'
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder='Enter your number'
                        />
                    </div>
                    <div className={style.inputGroup}>
                        <label>Change Password</label>
                        <input 
                            className={`${style.inputField} ${style.first}`} 
                            type='password' 
                            name='currentPassword'
                            value={formData.currentPassword}
                            onChange={handleChange}
                            placeholder='Current Password'
                        />
                        <span>
                            <button 
                                type="button" 
                                className={style.forgetButton}  
                                onClick={() => setIsResetOpen(true)}
                            >
                                Forget Password
                            </button>
                        </span>
                        <input 
                            className={style.inputField} 
                            type='password' 
                            name='newPassword'
                            value={formData.newPassword}
                            onChange={handleChange}
                            placeholder='New Password'
                        />
                        <input 
                            className={style.inputField} 
                            type='password' 
                            name='confirmPassword'
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder='Confirm Password'
                        />
                    </div>
                    <button type='submit' className={style.submitButton}>Update account</button>
                </form>
                <PasswordReset 
                    isOpen={isResetOpen} 
                    onClose={() => setIsResetOpen(false)}
                />
            </div>
        </>
    )
}

export default EditAccount