import React, { useState } from 'react';
import style from './SellForm.module.css';

const SellForm = ({ onNext }) => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        city: '',
        minPrice: '',
        maxPrice: '',
        status: '',
        carBrandId: '',
        carModel: '',
        section: '',
        files: null
    });

    const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston'];
    const carBrands = ['Toyota', 'Honda', 'Ford', 'BMW'];
    const carModels = ['Camry', 'Accord', 'F-150', 'X5'];
    const sections = ['Sedan', 'SUV', 'Truck', 'Luxury'];

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: files ? files[0] : value
        }));
    };

    const handleStatusSelect = (status) => {
        setFormData(prev => ({
            ...prev,
            status: status
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.status) {
            alert('Please select a status');
            return;
        }
        onNext(formData);
    };

    return (
        <>
            <span className={style.formTitle}>Add details</span>
            <div className={style.formContainer}>
                <form onSubmit={handleSubmit}>
                    {/* Name Field */}
                    <div className={style.formGroup}>
                        <label className={style.label}>
                            <span className={style.required}>Name</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={style.input}
                            placeholder="Enter the name"
                            required
                        />
                    </div>

                    {/* Description Field */}
                    <div className={style.formGroup}>
                        <label className={style.label}>
                            <span className={style.required}>Description</span>
                        </label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className={`${style.input} ${style.textarea}`}
                            placeholder="Enter the description"
                            required
                        />
                    </div>

                    {/* City Field */}
                    <div className={style.formGroup}>
                        <label className={style.label}>
                            <span className={style.required}>City</span>
                        </label>
                        <select
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className={style.select}
                            required
                        >
                            <option value="">choose the city</option>
                            {cities.map(city => (
                                <option key={city} value={city}>{city}</option>
                            ))}
                        </select>
                    </div>

                    {/* Price Range */}
                    <div className={style.formGroup}>
                        <label className={style.label}>
                            <span className={style.required}>Price</span>
                        </label>
                        <div className={style.priceContainer}>
                            <div className={style.priceInputWrapper}>
                                <input
                                    type="number"
                                    name="minPrice"
                                    value={formData.minPrice}
                                    onChange={handleChange}
                                    className={style.priceInput}
                                    placeholder="Min"
                                    required
                                />
                            </div>
                            <div className={style.priceInputWrapper}>
                                <input
                                    type="number"
                                    name="maxPrice"
                                    value={formData.maxPrice}
                                    onChange={handleChange}
                                    className={style.priceInput}
                                    placeholder="Max"
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    {/* Status Buttons */}
                    <div className={style.formGroup}>
                        <label className={style.label}>
                            <span className={style.required}>Status</span>
                        </label>
                        <div className={style.statusButtonGroup}>
                            <button
                                type="button"
                                className={`${style.statusButton} ${
                                    formData.status === 'New' ? style.statusButtonActive : ''
                                }`}
                                onClick={() => handleStatusSelect('New')}
                            >
                                New
                            </button>
                            <button
                                type="button"
                                className={`${style.statusButton} ${
                                    formData.status === 'Used' ? style.statusButtonActive : ''
                                }`}
                                onClick={() => handleStatusSelect('Used')}
                            >
                                Used
                            </button>
                        </div>
                    </div>

                    {/* Car Brand */}
                    <div className={style.formGroup}>
                        <label className={style.label}>
                            <span className={style.required}>Car_Brand_ID</span>
                        </label>
                        <select
                            name="carBrandId"
                            value={formData.carBrandId}
                            onChange={handleChange}
                            className={style.select}
                            required
                        >
                            <option value="">choose the car_Brand_ID</option>
                            {carBrands.map(brand => (
                                <option key={brand} value={brand}>{brand}</option>
                            ))}
                        </select>
                    </div>

                    {/* Car Model */}
                    <div className={style.formGroup}>
                        <label className={style.label}>
                            <span className={style.required}>Car_Model</span>
                        </label>
                        <select
                            name="carModel"
                            value={formData.carModel}
                            onChange={handleChange}
                            className={style.select}
                            required
                        >
                            <option value="">choose the car_Model</option>
                            {carModels.map(model => (
                                <option key={model} value={model}>{model}</option>
                            ))}
                        </select>
                    </div>

                    {/* Section */}
                    <div className={style.formGroup}>
                        <label className={style.label}>
                            <span className={style.required}>Section</span>
                        </label>
                        <select
                            name="section"
                            value={formData.section}
                            onChange={handleChange}
                            className={style.select}
                            required
                        >
                            <option value="">choose the section</option>
                            {sections.map(section => (
                                <option key={section} value={section}>{section}</option>
                            ))}
                        </select>
                    </div>

                    {/* File Upload */}
                    <div className={style.formGroup}>
                        <label className={style.label}>
                            <span>Files</span>
                        </label>
                        <div className={style.fileUpload}>
                            <label className={style.fileInputLabel}>
                                <span className={style.uploadIcon}>
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.6919 3.1174C15.5143 2.92315 15.2633 2.8125 15 2.8125C14.7368 2.8125 14.4858 2.92315 14.3081 3.1174L9.30811 8.58615C8.95873 8.96827 8.98528 9.56128 9.36741 9.91065C9.74954 10.26 10.3425 10.2335 10.6919 9.85135L14.0625 6.16475V20C14.0625 20.5177 14.4823 20.9375 15 20.9375C15.5178 20.9375 15.9375 20.5177 15.9375 20V6.16475L19.3081 9.85135C19.6575 10.2335 20.2505 10.26 20.6326 9.91065C21.0148 9.56128 21.0413 8.96827 20.6919 8.58615L15.6919 3.1174Z" fill="#6A6A6A"/>
                                        <path d="M4.6875 18.75C4.6875 18.2322 4.26778 17.8125 3.75 17.8125C3.23224 17.8125 2.8125 18.2322 2.8125 18.75V18.8186C2.81248 20.5281 2.81245 21.906 2.95815 22.9897C3.10943 24.1149 3.43304 25.0621 4.18544 25.8145C4.93784 26.567 5.88518 26.8906 7.01031 27.0419C8.09403 27.1875 9.47193 27.1875 11.1814 27.1875H18.8186C20.5281 27.1875 21.906 27.1875 22.9897 27.0419C24.1149 26.8906 25.0621 26.567 25.8146 25.8145C26.567 25.0621 26.8906 24.1149 27.0419 22.9897C27.1875 21.906 27.1875 20.5281 27.1875 18.8186V18.75C27.1875 18.2322 26.7677 17.8125 26.25 17.8125C25.7323 17.8125 25.3125 18.2322 25.3125 18.75C25.3125 20.5442 25.3105 21.7956 25.1836 22.7399C25.0602 23.6571 24.8347 24.1427 24.4888 24.4887C24.1427 24.8347 23.6571 25.0602 22.7399 25.1836C21.7956 25.3105 20.5443 25.3125 18.75 25.3125H11.25C9.45574 25.3125 8.20434 25.3105 7.26015 25.1836C6.34294 25.0602 5.85721 24.8347 5.51126 24.4887C5.16531 24.1427 4.93975 23.6571 4.81644 22.7399C4.68949 21.7956 4.6875 20.5442 4.6875 18.75Z" fill="#6A6A6A"/>
                                    </svg>
                                </span>
                                Upload file
                            </label>
                            <input
                                    type="file"
                                    name="files"
                                    onChange={handleChange}
                                    className={style.fileInput}
                                />
                            {formData.files && (
                                <span className={style.fileName}>{formData.files.name}</span>
                            )}
                        </div>
                    </div>

                    <div className={style.formGroup}>
                        <button type="submit" className={style.submitButton}>
                            Next
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default SellForm;