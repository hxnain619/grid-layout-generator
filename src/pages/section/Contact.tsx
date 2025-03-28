import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa6';
import Button from '../../components/common/Button';

const Contact = () => {
    return (
        <section id='contact' className="relative min-h-screen bg-brand-primary/20 backdrop-blur-sm py-20 overflow-hidden">
            <div className="absolute animate-pulse hidden md:block text-[1020px] -top-80 md:left-200 font-extrabold text-brand/50 z-0">
                d
            </div>
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-brand-contrast mb-12 text-center">
                    Let's Connect
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Personal Details */}
                    <div className="space-y-6">
                        <div className="bg-brand-contrast/5 backdrop-blur-sm border border-brand-contrast/20 rounded-2xl p-8">
                            <h3 className="text-2xl font-semibold text-brand-contrast mb-4">
                                About Me
                            </h3>
                            <p className="text-brand-contrast/80 leading-relaxed mb-6">
                                I'm a passionate frontend developer with expertise in creating beautiful and functional web applications.
                                I love working with modern web technologies and helping others build better user interfaces.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-brand-contrast/70">
                                    <FaEnvelope className="w-5 h-5" />
                                    <span>hxnain619@gmail.com</span>
                                </div>
                                <div className="flex items-center gap-3 text-brand-contrast/70">
                                    <span className="text-brand-primary">Based in</span>
                                    <span>Pakistan</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-brand-contrast/5 backdrop-blur-sm border border-brand-contrast/20 rounded-2xl p-8">
                            <h3 className="text-2xl font-semibold text-brand-contrast mb-4">
                                Skills
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Node.js', 'Git'].map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-sm"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Contact Icons */}
                    <div className="space-y-6">
                        <div className="bg-brand-contrast/5 backdrop-blur-sm border border-brand-contrast/20 rounded-2xl p-8">
                            <h3 className="text-2xl font-semibold text-brand-contrast mb-6">
                                Connect With Me
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                <a
                                    href="https://github.com/hxnain619"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-3 p-4 rounded-xl bg-brand-contrast/5 hover:bg-brand-contrast/10 transition-colors"
                                >
                                    <FaGithub className="w-6 h-6 text-brand-contrast/70 group-hover:text-brand-primary transition-colors" />
                                    <span className="text-brand-contrast/70 group-hover:text-brand-primary transition-colors">GitHub</span>
                                </a>
                                <a
                                    href="https://linkedin.com/in/hxnain619"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-3 p-4 rounded-xl bg-brand-contrast/5 hover:bg-brand-contrast/10 transition-colors"
                                >
                                    <FaLinkedin className="w-6 h-6 text-brand-contrast/70 group-hover:text-brand-primary transition-colors" />
                                    <span className="text-brand-contrast/70 group-hover:text-brand-primary transition-colors">LinkedIn</span>
                                </a>
                                <a
                                    href="https://twitter.com/hxnain619"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-3 p-4 rounded-xl bg-brand-contrast/5 hover:bg-brand-contrast/10 transition-colors"
                                >
                                    <FaTwitter className="w-6 h-6 text-brand-contrast/70 group-hover:text-brand-primary transition-colors" />
                                    <span className="text-brand-contrast/70 group-hover:text-brand-primary transition-colors">Twitter</span>
                                </a>
                                <a
                                    href="mailto:hxnain619@gmail.com"
                                    className="group flex items-center gap-3 p-4 rounded-xl bg-brand-contrast/5 hover:bg-brand-contrast/10 transition-colors"
                                >
                                    <FaEnvelope className="w-6 h-6 text-brand-contrast/70 group-hover:text-brand-primary transition-colors" />
                                    <span className="text-brand-contrast/70 group-hover:text-brand-primary transition-colors">Email</span>
                                </a>
                            </div>
                        </div>

                        <div className="bg-brand-contrast/5 backdrop-blur-sm border border-brand-contrast/20 rounded-2xl p-8">
                            <h3 className="text-2xl font-semibold text-brand-contrast mb-4">
                                Get in Touch
                            </h3>
                            <p className="text-brand-contrast/70 mb-6">
                                Have a question or want to work together? Feel free to reach out!
                            </p>
                            <Button
                                variant="primary"
                                size="md"
                                onClick={() => window.location.href = 'mailto:hxnain619@gmail.com'}
                            >
                                Send Message
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact; 