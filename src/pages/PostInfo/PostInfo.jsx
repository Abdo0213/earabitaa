import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { carsData } from '../../data/data';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './PostInfo.module.css';

const PostInfo = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [isEditingPostDetails, setIsEditingPostDetails] = useState(false);
    const [isEditingUserInfo, setIsEditingUserInfo] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        city: '',
        price: '',
        status: '',
        carBrandId: '',
        carModel: '',
        section: '',
        yourName: '',
        phone: '',
        contactCity: '',
        contactMethod: 'Both',
        images: []
    });
    const [originalData, setOriginalData] = useState({
        postDetails: {},
        userInfo: {}
    });

    useEffect(() => {
        // Get post from location state or find by id
        const postData = location.state?.post || carsData.find(car => car.id === parseInt(id));
        if (postData) {
            setPost(postData);
            // Parse price if it's in format "EGP 5000" or "5000 : 5500"
            let priceValue = '';
            if (postData.price) {
                const priceMatch = postData.price.match(/(\d+)\s*:\s*(\d+)/);
                if (priceMatch) {
                    // Format: "5000 : 5500"
                    priceValue = `${priceMatch[1]} : ${priceMatch[2]}`;
                } else {
                    // Format: "EGP 5000"
                    const singlePrice = postData.price.match(/\d+/);
                    priceValue = singlePrice ? singlePrice[0] : '';
                }
            }
            
            // Parse location - extract city if it's in format "Area, City"
            const locationParts = postData.location ? postData.location.split(',') : [];
            const city = locationParts.length > 1 ? locationParts[1].trim() : (postData.location || '');
            
            const initialData = {
                name: postData.title || '',
                description: postData.description || '',
                city: city,
                price: priceValue,
                status: postData.status || '',
                carBrandId: postData.carType || '',
                carModel: postData.title || '',
                section: postData.section || '',
                yourName: 'Ayman Ibrahim', // Default or from user data
                phone: postData.phone || '',
                contactCity: city,
                contactMethod: 'Both',
                images: postData.image || []
            };
            
            setFormData(initialData);
            setOriginalData({
                postDetails: {
                    name: initialData.name,
                    description: initialData.description,
                    city: initialData.city,
                    price: initialData.price,
                    status: initialData.status,
                    carBrandId: initialData.carBrandId,
                    carModel: initialData.carModel,
                    section: initialData.section,
                    images: [...initialData.images]
                },
                userInfo: {
                    yourName: initialData.yourName,
                    phone: initialData.phone,
                    contactCity: initialData.contactCity,
                    contactMethod: initialData.contactMethod
                }
            });
        }
    }, [id, location.state]);

    const handleEditPostDetails = () => {
        setIsEditingPostDetails(true);
    };

    const handleEditUserInfo = () => {
        setIsEditingUserInfo(true);
    };

    const handleChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleSavePostDetails = () => {
        // Save to backend here
        setOriginalData({
            ...originalData,
            postDetails: {
                name: formData.name,
                description: formData.description,
                city: formData.city,
                price: formData.price,
                status: formData.status,
                carBrandId: formData.carBrandId,
                carModel: formData.carModel,
                section: formData.section,
                images: [...formData.images]
            }
        });
        setIsEditingPostDetails(false);
    };

    const handleCancelPostDetails = () => {
        // Restore original data
        setFormData({
            ...formData,
            ...originalData.postDetails,
            images: [...originalData.postDetails.images]
        });
        setIsEditingPostDetails(false);
    };

    const handleSaveUserInfo = () => {
        // Save to backend here
        setOriginalData({
            ...originalData,
            userInfo: {
                yourName: formData.yourName,
                phone: formData.phone,
                contactCity: formData.contactCity,
                contactMethod: formData.contactMethod
            }
        });
        setIsEditingUserInfo(false);
    };

    const handleCancelUserInfo = () => {
        // Restore original data
        setFormData({
            ...formData,
            ...originalData.userInfo
        });
        setIsEditingUserInfo(false);
    };

    const handleDeleteImage = (index) => {
        const newImages = formData.images.filter((_, i) => i !== index);
        setFormData({ ...formData, images: newImages });
    };

    const handleDeletePost = () => {
        if (window.confirm('Are you sure you want to delete this post?')) {
            // Delete post logic here
            navigate('/my-posts');
        }
    };

    const EditableField = ({ label, field, value, required = false, type = 'text', options = null, isEditing = false }) => {
        return (
            <div className={styles.field}>
                <div className={styles.fieldHeader}>
                    <label className={styles.label}>
                        {label}{required && <span className={styles.required}>*</span>}
                    </label>
                </div>
                {isEditing ? (
                    <div className={styles.editContainer}>
                        {type === 'select' && options ? (
                            <select
                                className={styles.input}
                                value={value}
                                onChange={(e) => handleChange(field, e.target.value)}
                            >
                                {options.map(opt => (
                                    <option key={opt} value={opt}>{opt}</option>
                                ))}
                            </select>
                        ) : type === 'textarea' ? (
                            <textarea
                                className={styles.textarea}
                                value={value}
                                onChange={(e) => handleChange(field, e.target.value)}
                            />
                        ) : (
                            <input
                                type={type}
                                className={styles.input}
                                value={value}
                                onChange={(e) => handleChange(field, e.target.value)}
                            />
                        )}
                    </div>
                ) : (
                    <div className={styles.value}>{value || '-'}</div>
                )}
            </div>
        );
    };

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Header 
                header="Post info"
                backNavigationPath="/my-posts"
                trailingIcon="deleteIcon.svg"
                trailingIconNavigationPath={null}
                onTrailingIconClick={handleDeletePost}
            />
            <div className={styles.contentWrapper}>
                <div className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <h3 className={styles.sectionTitle}>Post Details</h3>
                        {!isEditingPostDetails && (
                            <button 
                                className={styles.editButton}
                                onClick={handleEditPostDetails}
                            >
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M23.6984 1.08901C22.2463 -0.362998 19.8923 -0.36301 18.4402 1.08901L16.3583 3.17091L6.55985 12.9693C6.40101 13.1282 6.28834 13.3272 6.23386 13.5451L4.99449 18.5026C4.8889 18.925 5.01265 19.3718 5.32048 19.6795C5.62832 19.9874 6.0751 20.1112 6.49745 20.0056L11.4549 18.7662C11.6729 18.7117 11.8718 18.599 12.0307 18.4401L21.7579 8.71302L23.9111 6.55985C25.3631 5.10784 25.3631 2.75366 23.9111 1.30165L23.6984 1.08901ZM20.1929 2.84174C20.6769 2.35774 21.4617 2.35774 21.9457 2.84174L22.1583 3.05438C22.6423 3.53839 22.6423 4.32312 22.1583 4.80712L20.8985 6.06697L18.9708 4.06391L20.1929 2.84174ZM17.2177 5.81696L19.1454 7.82002L10.5208 16.4447L7.90021 17.0999L8.55532 14.4794L17.2177 5.81696ZM2.47874 7.64886C2.47874 6.96438 3.03363 6.40949 3.71811 6.40949H9.91496C10.5995 6.40949 11.1543 5.85461 11.1543 5.17012C11.1543 4.48564 10.5995 3.93075 9.91496 3.93075H3.71811C1.66466 3.93075 0 5.59541 0 7.64886V21.2819C0 23.3354 1.66466 25 3.71811 25H17.3512C19.4047 25 21.0693 23.3354 21.0693 21.2819V15.085C21.0693 14.4007 20.5144 13.8457 19.8299 13.8457C19.1454 13.8457 18.5906 14.4007 18.5906 15.085V21.2819C18.5906 21.9664 18.0357 22.5213 17.3512 22.5213H3.71811C3.03363 22.5213 2.47874 21.9664 2.47874 21.2819V7.64886Z" fill="#DC510A"/>
                                </svg>
                            </button>
                        )}
                    </div>
                    
                    <EditableField 
                        label="Name" 
                        field="name" 
                        value={formData.name} 
                        required 
                        isEditing={isEditingPostDetails}
                    />
                    
                    <EditableField 
                        label="Description" 
                        field="description" 
                        value={formData.description} 
                        required 
                        type="textarea"
                        isEditing={isEditingPostDetails}
                    />
                    
                    <EditableField 
                        label="City" 
                        field="city" 
                        value={formData.city} 
                        required 
                        isEditing={isEditingPostDetails}
                    />
                    
                    <EditableField 
                        label="Price" 
                        field="price" 
                        value={formData.price} 
                        required 
                        type="text"
                        isEditing={isEditingPostDetails}
                    />
                    
                    <EditableField 
                        label="Status" 
                        field="status" 
                        value={formData.status} 
                        required 
                        type="select"
                        options={['New', 'Used']}
                        isEditing={isEditingPostDetails}
                    />
                    
                    <EditableField 
                        label="Car_Brand_ID" 
                        field="carBrandId" 
                        value={formData.carBrandId} 
                        required 
                        isEditing={isEditingPostDetails}
                    />
                    
                    <EditableField 
                        label="Car_Model" 
                        field="carModel" 
                        value={formData.carModel} 
                        required 
                        isEditing={isEditingPostDetails}
                    />
                    
                    <EditableField 
                        label="Section" 
                        field="section" 
                        value={formData.section} 
                        required 
                        type="select"
                        options={['Vehicle', 'Country']}
                        isEditing={isEditingPostDetails}
                    />
                    
                    <div className={styles.field}>
                        <label className={styles.label}>
                            Files<span className={styles.required}>*</span>
                        </label>
                        <div className={styles.imagesContainer}>
                            {formData.images.filter(img => img).map((img, index) => (
                            <div key={index} className={styles.imageWrapper}>
                                <img src={img} alt="post" className={styles.image} />
                                {isEditingPostDetails && (
                                    <button className={styles.deleteImageButton} onClick={() => handleDeleteImage(index)}>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3 6h18M9 6v12m6-12v12M4 6l1 14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2l1-14M10 6V4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </button>
                                )}
                            </div>
                            ))}
                        </div>
                    </div>

                    {isEditingPostDetails && (
                        <div className={styles.actionButtons}>
                            <button className={styles.saveButton} onClick={handleSavePostDetails}>
                                Save
                            </button>
                            <button className={styles.cancelButton} onClick={handleCancelPostDetails}>
                                Cancel
                            </button>
                        </div>
                    )}
                </div>

                <div className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <h3 className={styles.sectionTitle}>User Information</h3>
                        {!isEditingUserInfo && (
                            <button 
                                className={styles.editButton}
                                onClick={handleEditUserInfo}
                            >
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M23.6984 1.08901C22.2463 -0.362998 19.8923 -0.36301 18.4402 1.08901L16.3583 3.17091L6.55985 12.9693C6.40101 13.1282 6.28834 13.3272 6.23386 13.5451L4.99449 18.5026C4.8889 18.925 5.01265 19.3718 5.32048 19.6795C5.62832 19.9874 6.0751 20.1112 6.49745 20.0056L11.4549 18.7662C11.6729 18.7117 11.8718 18.599 12.0307 18.4401L21.7579 8.71302L23.9111 6.55985C25.3631 5.10784 25.3631 2.75366 23.9111 1.30165L23.6984 1.08901ZM20.1929 2.84174C20.6769 2.35774 21.4617 2.35774 21.9457 2.84174L22.1583 3.05438C22.6423 3.53839 22.6423 4.32312 22.1583 4.80712L20.8985 6.06697L18.9708 4.06391L20.1929 2.84174ZM17.2177 5.81696L19.1454 7.82002L10.5208 16.4447L7.90021 17.0999L8.55532 14.4794L17.2177 5.81696ZM2.47874 7.64886C2.47874 6.96438 3.03363 6.40949 3.71811 6.40949H9.91496C10.5995 6.40949 11.1543 5.85461 11.1543 5.17012C11.1543 4.48564 10.5995 3.93075 9.91496 3.93075H3.71811C1.66466 3.93075 0 5.59541 0 7.64886V21.2819C0 23.3354 1.66466 25 3.71811 25H17.3512C19.4047 25 21.0693 23.3354 21.0693 21.2819V15.085C21.0693 14.4007 20.5144 13.8457 19.8299 13.8457C19.1454 13.8457 18.5906 14.4007 18.5906 15.085V21.2819C18.5906 21.9664 18.0357 22.5213 17.3512 22.5213H3.71811C3.03363 22.5213 2.47874 21.9664 2.47874 21.2819V7.64886Z" fill="#DC510A"/>
                                </svg>
                            </button>
                        )}
                    </div>
                    
                    <EditableField 
                        label="Your name" 
                        field="yourName" 
                        value={formData.yourName} 
                        isEditing={isEditingUserInfo}
                    />
                    
                    <EditableField 
                        label="Phone" 
                        field="phone" 
                        value={formData.phone} 
                        required 
                        type="tel"
                        isEditing={isEditingUserInfo}
                    />
                    
                    <EditableField 
                        label="City" 
                        field="contactCity" 
                        value={formData.contactCity} 
                        required 
                        isEditing={isEditingUserInfo}
                    />
                    
                    <EditableField 
                        label="Contact Method" 
                        field="contactMethod" 
                        value={formData.contactMethod} 
                        type="select"
                        options={['Phone', 'Message', 'Both']}
                        isEditing={isEditingUserInfo}
                    />

                    {isEditingUserInfo && (
                        <div className={styles.actionButtons}>
                            <button className={styles.saveButton} onClick={handleSaveUserInfo}>
                                Save
                            </button>
                            <button className={styles.cancelButton} onClick={handleCancelUserInfo}>
                                Cancel
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default PostInfo;

