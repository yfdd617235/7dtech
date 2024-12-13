import React from 'react';
import ScrollToTop from '../components/ScrollToTop';

function BpoDevelopmentPage() {
    return (
        <div>
            <ScrollToTop />
            <div className="border-y border-[#0CC0DF] mt-36">
                <div className="flex flex-col md:flex-row justify-center items-center mx-auto py-14 px-4 lg:px-20 2xl:px-60">

                    <div className="flex-shrink-0 md:w-1/4 flex justify-center items-center">
                        <h2 className="text-lg md:text-2xl font-bold text-center">What is BPO Development?</h2>
                    </div>

                    <div className="md:w-3/4">
                        <p className="text-justify text-xs md:text-lg my-4">
                            Business Process Outsourcing (BPO) Development refers to the creation of tailored software solutions designed to streamline and optimize business operations. These solutions are customized to meet the specific needs of each business, ensuring efficiency, scalability, and seamless integration with existing processes.
                        </p>
                        <p className="text-justify text-xs md:text-lg my-4">
                            At 7D Technologies, we specialize in developing systems that empower businesses to adapt to a rapidly evolving digital landscape. By leveraging cutting-edge technologies and innovative design, we transform challenges into opportunities.
                        </p>
                    </div>
                </div>
            </div>

            {/* Cards Section */}
            <div id="services" className="snap-section section mx-auto px-4 lg:px-20 2xl:px-60 mb-32 pt-28">
                <h2 className="text-lg md:text-2xl font-bold text-center pb-16">Key Features of BPO Development</h2>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                    {[ // Cards content
                        {
                            title: 'Tailored Solutions',
                            description: 'We design software specifically for your business needs, ensuring seamless alignment with your processes.',
                            image: "bpo1.jpg",
                        },
                        {
                            title: 'Enhanced Efficiency',
                            description: 'Our systems automate repetitive tasks, reduce errors, and improve overall operational efficiency.',
                            image: "bpo2.jpg",
                        },
                        {
                            title: 'Scalability',
                            description: 'Built with growth in mind, our solutions adapt to your business’s evolving demands.',
                            image: "bpo3.jpg",
                        },
                    ].map((card, index) => (
                        <div key={index} className="border border-[#0CC0DF] cursor-pointer h-full shadow-xl rounded-lg relative group overflow-hidden hover:z-50">
                            {/* Image */}
                            <img
                                src={`${import.meta.env.BASE_URL}${card.image}`}
                                alt={card.title}
                                className="w-full h-48 object-cover rounded-t-lg transition-opacity duration-1000 group-hover:opacity-0"
                            />
                            {/* Title (visible initially) */}
                            <div className="p-4 md:p-6 text-center">
                                <h5 className="text-base md:text-lg font-semibold">{card.title}</h5>
                            </div>
                            {/* Description (hidden until hover) */}
                            <div className="p-4 md:p-6 absolute inset-0 bg-black flex flex-col justify-center text-left opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h5 className="text-base md:text-lg text-[#0CC0DF] font-semibold">{card.title}</h5>
                                <p className="text-sm md:text-base mt-2">{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="border-y border-[#0CC0DF] mt-20">
                <div className="flex flex-col gap-12 md:flex-row justify-center items-center mx-auto py-14 px-4 lg:px-20 2xl:px-60">

                    <div className="md:w-3/5">
                        <h2 className="text-lg md:text-2xl font-bold text-center">Why Choose Custom Software?</h2>
                        <p className="text-justify text-xs md:text-lg my-4">
                            Custom software solutions provide unparalleled flexibility and efficiency for businesses seeking to gain a competitive edge. By tailoring technology to fit your unique needs, you can optimize workflows, reduce costs, and enhance user satisfaction.
                        </p>
                        <p className="text-justify text-xs md:text-lg my-4">
                            <strong>Key Advantages:</strong><br />
                            - <strong>Personalization:</strong> Fully aligned with your business goals and requirements.<br />
                            - <strong>Integration:</strong> Seamlessly connects with your existing systems and tools.<br />
                            - <strong>Future-Proofing:</strong> Scalable and adaptable to support your growth over time.
                        </p>
                    </div>

                    <div className="flex flex-col md:w-2/5 justify-center items-center space-y-6">
                        {/* Video 1 */}
                        {/* Video 1 */}
                        <div className="w-full">
                            <video
                                className="w-full h-full object-contain rounded-lg shadow-lg"
                                src={`${import.meta.env.BASE_URL}chip2.mp4`}
                                poster={`${import.meta.env.BASE_URL}chip1.png`}
                                muted
                                autoPlay
                                loop
                                playsInline
                                onError={(e) => (e.target.style.display = 'none')}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BpoDevelopmentPage;
