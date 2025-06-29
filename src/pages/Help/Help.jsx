import React, { useState } from 'react';
import style from './Help.module.css';
import Header from '../../components/Header/Header'
import ArrowItem from '../../components/ArrowItem/ArrowItem';

const Help = () => {
    const [activeTab, setActiveTab] = useState('faq');
    const [expandedItems, setExpandedItems] = useState([]);

    const faqs = [
        {
            id: 1,
            question: "What Lorem Ipsum is simply",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },
        {
            id: 2,
            question: "What Lorem Ipsum is simply",
            answer: "Answer to the second question would go here."
        },
        {
            id: 3,
            question: "What Lorem Ipsum is simply",
            answer: "Answer to the third question would go here."
        },
        {
            id: 4,
            question: "What Lorem Ipsum is simply",
            answer: "Answer to the third question would go here."
        },
        {
            id: 5,
            question: "What Lorem Ipsum is simply",
            answer: "Answer to the third question would go here."
        }
    ];
    
    const contact_us = [
        {
            id: 1,
            icon: (<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_472_1414)">
                        <path d="M18.8334 14.6682C18.833 15.8078 18.4435 16.9131 17.7293 17.8012C17.015 18.6892 16.019 19.3068 14.9059 19.5515L14.3742 17.9565C14.8611 17.8763 15.3241 17.6891 15.7299 17.4084C16.1357 17.1277 16.4742 16.7605 16.7209 16.3332H14.6667C14.2247 16.3332 13.8008 16.1576 13.4882 15.845C13.1757 15.5325 13.0001 15.1085 13.0001 14.6665V11.3332C13.0001 10.8911 13.1757 10.4672 13.4882 10.1547C13.8008 9.8421 14.2247 9.6665 14.6667 9.6665H17.1151C16.9117 8.05558 16.1275 6.57423 14.9096 5.5004C13.6917 4.42657 12.1238 3.83407 10.5001 3.83407C8.87638 3.83407 7.30847 4.42657 6.09056 5.5004C4.87265 6.57423 4.08844 8.05558 3.88508 9.6665H6.33341C6.77544 9.6665 7.19937 9.8421 7.51193 10.1547C7.82449 10.4672 8.00008 10.8911 8.00008 11.3332V14.6665C8.00008 15.1085 7.82449 15.5325 7.51193 15.845C7.19937 16.1576 6.77544 16.3332 6.33341 16.3332H3.83341C3.39139 16.3332 2.96746 16.1576 2.6549 15.845C2.34234 15.5325 2.16675 15.1085 2.16675 14.6665V10.4998C2.16675 5.89734 5.89758 2.1665 10.5001 2.1665C15.1026 2.1665 18.8334 5.89734 18.8334 10.4998V14.6682Z" fill="#222831"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_472_1414">
                        <rect width="20" height="20" fill="white" transform="translate(0.5 0.5)"/>
                        </clipPath>
                        </defs>
                    </svg>
            ),
            question: "Customer Service",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },
        {
            id: 2,
            icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_472_1423)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.821 14.1211C15.58 14.8033 14.622 15.3677 13.858 15.5327C13.335 15.6437 12.653 15.7316 10.355 14.7793C7.774 13.71 4.19 9.90097 4.19 7.36621C4.19 6.07582 4.934 4.57324 6.235 4.57324C6.861 4.57324 6.999 4.58545 7.205 5.07959C7.446 5.66177 8.034 7.09612 8.104 7.24316C8.393 7.84634 7.80999 8.19945 7.38699 8.72461C7.25199 8.88265 7.099 9.05358 7.27 9.34766C7.44 9.63575 8.028 10.5941 8.892 11.3633C10.008 12.3576 10.913 12.675 11.237 12.8101C11.478 12.9101 11.766 12.8868 11.942 12.6987C12.165 12.4577 12.442 12.0577 12.724 11.6636C12.923 11.3815 13.176 11.3463 13.441 11.4463C13.62 11.5083 15.895 12.5648 15.991 12.7339C16.062 12.8569 16.062 13.4389 15.821 14.1211ZM10.002 0H9.99699C4.48399 0 0 4.48535 0 10C0 12.1867 0.705007 14.2153 1.90401 15.8608L0.658005 19.5767L4.50101 18.3486C6.08201 19.395 7.969 20 10.002 20C15.515 20 20 15.5147 20 10C20 4.48535 15.515 0 10.002 0Z" fill="#222831"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_472_1423">
                        <rect width="20" height="20" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
            ),
            question: "WhatsApp",
            answer: "Answer to the second question would go here."
        },
        {
            id: 3,
            icon: (<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5 0.5C4.97715 0.5 0.5 4.97715 0.5 10.5C0.5 16.0229 4.97715 20.5 10.5 20.5C16.0229 20.5 20.5 16.0229 20.5 10.5C20.5 4.97715 16.0229 0.5 10.5 0.5ZM16.8389 6.20312H15.0159C14.8064 5.32371 14.5345 4.51512 14.2118 3.80023C14.8284 4.14305 15.4012 4.57355 15.9138 5.08621C16.2603 5.4327 16.569 5.8068 16.8389 6.20312ZM18.1562 10.5C18.1562 11.1683 18.0707 11.8233 17.9057 12.4531H15.4044C15.4669 11.8214 15.5 11.1685 15.5 10.5C15.5 9.83152 15.4669 9.17859 15.4044 8.54688H17.9057C18.0707 9.17668 18.1562 9.83172 18.1562 10.5ZM10.5 18.1562C10.2969 18.1562 9.67781 17.757 9.06078 16.5229C8.8052 16.0117 8.58586 15.4294 8.40641 14.7969H12.5936C12.4141 15.4294 12.1948 16.0117 11.9392 16.5229C11.3222 17.757 10.7031 18.1562 10.5 18.1562ZM7.95363 12.4531C7.88148 11.8185 7.84375 11.1629 7.84375 10.5C7.84375 9.83707 7.88148 9.18152 7.95363 8.54688H13.0464C13.1185 9.18152 13.1562 9.83707 13.1562 10.5C13.1562 11.1629 13.1185 11.8185 13.0464 12.4531H7.95363ZM2.84375 10.5C2.84375 9.83172 2.92934 9.17668 3.0943 8.54688H5.59562C5.53309 9.17859 5.5 9.83152 5.5 10.5C5.5 11.1685 5.53309 11.8214 5.59562 12.4531H3.0943C2.92934 11.8233 2.84375 11.1683 2.84375 10.5ZM10.5 2.84375C10.7031 2.84375 11.3222 3.24301 11.9392 4.47707C12.1948 4.98828 12.4141 5.57059 12.5936 6.20312H8.40641C8.58586 5.57062 8.80516 4.98828 9.06078 4.47707C9.67781 3.24301 10.2969 2.84375 10.5 2.84375ZM6.78824 3.80023C6.46543 4.51512 6.19363 5.32367 5.98406 6.20312H4.16113C4.43102 5.8068 4.73973 5.4327 5.08621 5.08621C5.59887 4.57355 6.1716 4.14305 6.78824 3.80023ZM4.16113 14.7969H5.98406C6.19363 15.6763 6.46547 16.4849 6.78824 17.1998C6.1716 16.857 5.59883 16.4264 5.08621 15.9138C4.73973 15.5673 4.43098 15.1932 4.16113 14.7969ZM14.2118 17.1998C14.5346 16.4849 14.8064 15.6763 15.0159 14.7969H16.8389C16.569 15.1932 16.2603 15.5673 15.9138 15.9138C15.4011 16.4264 14.8284 16.857 14.2118 17.1998Z" fill="#222831"/>
                </svg>
            ),
            question: "Website",
            answer: "Answer to the third question would go here."
        },
        {
            id: 4,
            icon: (<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.5 0.5C4.99999 0.5 0.5 5.00803 0.5 10.5603C0.5 15.5803 4.15999 19.747 8.93999 20.5V13.4719H6.39999V10.5603H8.93999V8.34136C8.93999 5.82128 10.43 4.43574 12.72 4.43574C13.81 4.43574 14.95 4.6265 14.95 4.6265V7.10642H13.69C12.45 7.10642 12.06 7.87951 12.06 8.6727V10.5603H14.84L14.39 13.4719H12.06V20.5C14.4164 20.1263 16.5622 18.9192 18.1099 17.0964C19.6576 15.2737 20.5054 12.9554 20.5 10.5603C20.5 5.00803 16 0.5 10.5 0.5Z" fill="#222831"/>
                    </svg>
            ),
            question: "Facebook",
            answer: "Answer to the third question would go here."
        }
    ];

    const toggleItem = (id) => {
        setExpandedItems(prev => 
        prev.includes(id) 
            ? prev.filter(itemId => itemId !== id)
            : [...prev, id]
        );
    };

    return (
        <>
            <Header header="Help" backNavigationPath="/settings"/>
            <div className={style.container}>
                <div className={style.header}>
                    <span className={style.titleContainerFAQ}>
                        <p
                            className={`${style.tabTitle} ${activeTab === 'faq' ? style.activeTab : ''}`}
                            onClick={() => setActiveTab('faq')}
                        >
                            FAQ
                        </p>
                    </span>
                    <span className={style.titleContainerContact}>
                        <p
                            className={`${style.tabTitle} ${activeTab === 'contact' ? style.activeTab : ''}`}
                            onClick={() => setActiveTab('contact')}
                        >
                            Contact Us
                        </p>
                    </span>
                </div>

                <div className={style.content}>
                    {activeTab === 'faq' ? (
                    <div className={style.faqSection}>
                        {faqs.map((faq) => (
                        <ArrowItem 
                            key={faq.id}
                            list={faq}
                            isExpanded={expandedItems.includes(faq.id)}
                            toggleItem={toggleItem}
                        />
                        ))}
                    </div>
                    ) : (
                    <div className={style.contactSection}>
                        {contact_us.map((contact) => (
                        <ArrowItem 
                            key={contact.id}
                            list={contact}
                            isExpanded={expandedItems.includes(contact.id)}
                            toggleItem={toggleItem}
                        />
                        ))}
                    </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Help;