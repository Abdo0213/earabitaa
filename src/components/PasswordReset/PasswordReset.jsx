import React, { useState } from 'react';
import Popup from '../../components/Popup/Popup';
import styles from './PasswordReset.module.css';

const PasswordReset = ({ isOpen, onClose }) => {
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState('');
    const [code, setCode] = useState(['', '', '', '']);
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [mockVerificationCode, setMockVerificationCode] = useState('');

    // Mock API functions
    const mockApi = {
        sendVerificationCode: (email) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                // Generate random 4-digit code
                const generatedCode = Math.floor(1000 + Math.random() * 9000).toString();
                setMockVerificationCode(generatedCode);
                console.log(`Mock: Sent verification code ${generatedCode} to ${email}`);
                resolve();
                }, 1000);
            });
        },
        
        verifyCode: (email, enteredCode) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                if (enteredCode === mockVerificationCode) {
                    console.log('Mock: Code verified successfully');
                    resolve();
                } else {
                    console.log('Mock: Invalid verification code');
                    reject(new Error('Invalid verification code'));
                }
                }, 1000);
            });
        },
        
        resetPassword: (email, code, newPassword) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                console.log(`Mock: Password reset for ${email} with code ${code}`);
                console.log(`Mock: New password is "${newPassword}"`);
                resolve();
                }, 1000);
            });
        }
    };

    const handleEmailSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
        try {
            await mockApi.sendVerificationCode(email);
            setStep(2);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleCodeSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
        try {
            await mockApi.verifyCode(email, code.join(''));
            setStep(3);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handlePasswordSubmit = async (e) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        setIsLoading(true);
        setError('');
        try {
            await mockApi.resetPassword(email, code.join(''), newPassword);
            alert('Password reset successfully! (mock)');
            onClose();
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleCodeChange = (index, value) => {
        if (!/^\d*$/.test(value)) return; // Only allow numbers
        
        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);
        
        // Auto-focus next input
        if (value && index < 3) {
            document.getElementById(`code-input-${index + 1}`).focus();
        }
    };

    return (
        <Popup isOpen={isOpen} onClose={onClose}>
            {step === 1 && (
                <div className={styles.stepContainer}>
                    <h2>Forget Password</h2>
                    <p>Enter your Email for the verification process.{'\n'}We will send 4 digits code to your email</p>
                    
                    <form onSubmit={handleEmailSubmit}>
                        <div className={styles.inputGroup}>
                            <label>Email address</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='Email address'
                                required
                            />
                        </div>
                        {error && <div className={styles.error}>{error}</div>}
                        <button className={styles.myButton} type="submit" disabled={isLoading}>
                            {isLoading ? 'Sending...' : 'Continue'}
                        </button>
                    </form>
                </div>
            )}

            {step === 2 && (
                <div className={styles.stepContainer}>
                    <h2>Enter 4 Digits Code</h2>
                    <p>Enter the 4 digits code that you received on your email.</p>
                    
                    <form onSubmit={handleCodeSubmit}>
                        <div className={styles.codeInputs}>
                        {[0, 1, 2, 3].map((index) => (
                            <input
                            key={index}
                            id={`code-input-${index}`}
                            type="text"
                            maxLength="1"
                            value={code[index]}
                            onChange={(e) => handleCodeChange(index, e.target.value)}
                            pattern="[0-9]"
                            required
                            />
                        ))}
                        </div>
                        {error && <div className={styles.error}>{error}</div>}
                        <button className={styles.myButton} type="submit" disabled={isLoading}>
                        {isLoading ? 'Verifying...' : 'Continue'}
                        </button>
                    </form>
                </div>
            )}

            {step === 3 && (
                <div className={styles.stepContainer}>
                    <h2>Reset password</h2>
                    <p>Set the new password for your account so you can login and access all the features</p>
                    
                    <form onSubmit={handlePasswordSubmit}>
                        <div className={styles.inputGroup}>
                        <label>New password</label>
                        <input
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                        />
                        </div>
                        <div className={styles.inputGroup}>
                        <label>Re-enter password</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                        </div>
                        {error && <div className={styles.error}>{error}</div>}
                        <button className={styles.myButton} type="submit" disabled={isLoading}>
                        {isLoading ? 'Updating...' : 'Update password'}
                        </button>
                    </form>
                </div>
            )}
        </Popup>
    );
};

export default PasswordReset;