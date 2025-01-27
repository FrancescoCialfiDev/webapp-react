export const AboutUsPage = () => {
    return (
        <main className="bg-dark p-5 ">
            <h1 className="text-white mb-4">About Us</h1>
            <div className="text-light mb-4">
                <p>
                    We are a team of passionate professionals dedicated to providing high-quality services
                    to our clients. Our goal is to make a positive impact through innovation, creativity, and
                    collaboration. With years of experience in our respective fields, we aim to deliver
                    exceptional results and exceed expectations.
                </p>
                <p>
                    Our team is built on trust, respect, and a shared commitment to excellence. We strive to
                    foster an inclusive and supportive environment where every team member can thrive and
                    contribute to our collective success.
                </p>
            </div>
            <h3 className="text-white mb-3">Meet Our Team</h3>
            <div className="list-group">
                <div className="list-group-item list-group-item-action bg-dark text-light border-secondary mb-2 rounded">
                    <h5 className="mb-1">Michele Saraceni</h5>
                    <p className="mb-0">Co-Founder & CEO</p>
                    <p className="text-info">michele@hotmail.it</p>
                </div>
                <div className="list-group-item list-group-item-action bg-dark text-light border-secondary mb-2 rounded">
                    <h5 className="mb-1">Daniel Ferraiuolo</h5>
                    <p className="mb-0">Co-Founder & CTO</p>
                    <p className="text-info">daniel@libero.it</p>
                </div>
                <div className="list-group-item list-group-item-action bg-dark text-light border-secondary mb-2 rounded">
                    <h5 className="mb-1">Francesco Cialfi</h5>
                    <p className="mb-0">Lead Developer</p>
                    <p className="text-info">francesco@gmail.it</p>
                </div>
                <div className="list-group-item list-group-item-action bg-dark text-light border-secondary mb-2 rounded">
                    <h5 className="mb-1">Andrea Giancristiani</h5>
                    <p className="mb-0">Creative Director</p>
                    <p className="text-info">andrea@hotmail.it</p>
                </div>
                <div className="list-group-item list-group-item-action bg-dark text-light border-secondary mb-2 rounded">
                    <h5 className="mb-1">Carlo Dettori</h5>
                    <p className="mb-0">Marketing Manager</p>
                    <p className="text-info">carlo@gmail.it</p>
                </div>
            </div>
        </main>
    );
};
