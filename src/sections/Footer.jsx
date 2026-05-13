// rafce
import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai'

const Footer = () => {
    return (
        <section className="c-space pt-7 pb-3 border-t border-black-300 flex flex-col items-center gap-3">
            <div className="flex gap-6 text-sm">
                <a href="/impressum.html" target="_blank" className="text-gray_gradient hover:text-white transition-colors">
                    Impressum
                </a>
                <a href="/dsgvo.html" target="_blank" className="text-gray_gradient hover:text-white transition-colors">
                    Datenschutzerklärung
                </a>
            </div>

            <div className="w-full flex justify-between items-center">
                <div className="text-white-800 font-medium">
                    <p>© 2026 Svetlana Pantschenko. All rights reserved.</p>
                </div>

<div className="flex gap-3">
                    <div className="social-icon">
                        <a href="https://github.com/overdazed" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <AiFillGithub className="w-6 h-6" />
                        </a>
                    </div>
                    <div className="social-icon">
                        <a href="https://linkedin.com/in/svetlana-pantschenko-498509343" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <AiFillLinkedin className="w-6 h-6" />
                        </a>
                    </div>
                    <div className="social-icon">
                        <a href="mailto:sv.pant@proton.me" className="text-gray-400 hover:text-white transition-colors">
                            <AiOutlineMail className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer