import React, { useState } from 'react'
import Footer from '../../components/Footer/Footer'
import style from './Sell.module.css'
import ContactInfoForm from '../../components/ContactInfoForm/ContactInfoFom'
import SellForm from '../../components/SellForm/SellForm'
import Header from '../../components/Header/Header'

const Sell = () => {
    const [step, setStep] = useState(1);
    const [sellFormData, setSellFormData] = useState(null);
    const [contactInfo, setContactInfo] = useState({
        name: '',
        phone: '',
        contactMethod: ''
    });

    const handleSellFormSubmit = (data) => {
        setSellFormData(data);
        setStep(2);
    };

    const handleContactSubmit = (contactData) => {
        setContactInfo(contactData);
        // Combine all data and submit
        const completeData = { ...sellFormData, ...contactData };
        console.log('Complete submission:', completeData);
        // Add your API call or final submission logic here
    };

    const handleBack = () => {
        setStep(1);
    };

    return (
        <>
            <Header 
                header={step === 1 ? "Sell" : "Review your details"}
                onBack={step === 2 ? handleBack : null}
            />
            <div className={style.container}>
                {step === 1 ? (
                    <SellForm onNext={handleSellFormSubmit} />
                ) : (
                    <ContactInfoForm 
                    onBack={handleBack}
                    onSubmit={handleContactSubmit}
                    initialData={contactInfo}
                    />
                )}
            </div>
            <Footer/>
        </>
    )
}

export default Sell