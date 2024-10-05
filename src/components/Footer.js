export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
                
                <div className="mb-4 lg:mb-0">
                    <h2 className="text-2xl font-bold">My Portfolio</h2>
                </div>

                {/* Navigation Links */}
                <nav className="mb-4 lg:mb-0">
                    <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-6">
                        <li><a href="#about" className="hover:underline">About</a></li>
                        <li><a href="#projects" className="hover:underline">Projects</a></li>
                        <li><a href="#contact" className="hover:underline">Contact</a></li>
                    </ul>
                </nav>

                {/* Social Media Icons */}
                <div className="flex space-x-4">
                    <a href="https://x.com/ayushpokharel98" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                        <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M24 4.557a9.834 9.834 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.865 9.865 0 0 1-3.127 1.196 4.919 4.919 0 0 0-8.384 4.482A13.978 13.978 0 0 1 1.671 3.149a4.919 4.919 0 0 0 1.523 6.574 4.903 4.903 0 0 1-2.23-.616v.062a4.92 4.92 0 0 0 3.946 4.83 4.93 4.93 0 0 1-2.224.085 4.923 4.923 0 0 0 4.6 3.418 9.874 9.874 0 0 1-6.112 2.107c-.398 0-.79-.023-1.175-.068A13.945 13.945 0 0 0 7.548 21c9.057 0 14.009-7.506 14.009-14.01 0-.213-.005-.426-.014-.637A10.003 10.003 0 0 0 24 4.557z" />
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/ayushpokharel98/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                        <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M19.998 19.998h-3.654v-5.57c0-1.329-.025-3.04-1.855-3.04-1.856 0-2.141 1.448-2.141 2.94v5.67H8.699v-11.5h3.506v1.569h.051c.489-.925 1.683-1.897 3.465-1.897 3.707 0 4.39 2.438 4.39 5.612v6.216zM5.337 7.998a2.14 2.14 0 1 1 0-4.281 2.14 2.14 0 0 1 0 4.281zM3.517 19.998h3.645v-11.5H3.517v11.5zM22.224 0H1.771A1.771 1.771 0 0 0 0 1.771V22.23c0 .977.794 1.771 1.771 1.771h20.453A1.771 1.771 0 0 0 24 22.23V1.771A1.771 1.771 0 0 0 22.224 0z" />
                        </svg>
                    </a>
                    <a href="https://github.com/ayushpokharel98" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                        <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M12 .296a12 12 0 0 0-3.797 23.406c.6.112.82-.262.82-.583 0-.287-.011-1.043-.016-2.048-3.338.726-4.042-1.613-4.042-1.613-.546-1.387-1.334-1.757-1.334-1.757-1.091-.745.083-.73.083-.73 1.206.085 1.841 1.241 1.841 1.241 1.072 1.837 2.809 1.307 3.494.999.108-.776.42-1.307.763-1.607-2.665-.303-5.467-1.332-5.467-5.93 0-1.31.469-2.382 1.235-3.223-.123-.303-.536-1.523.118-3.176 0 0 1.008-.323 3.303 1.23a11.52 11.52 0 0 1 6.015 0c2.293-1.553 3.3-1.23 3.3-1.23.656 1.653.243 2.873.12 3.176.769.841 1.235 1.913 1.235 3.223 0 4.607-2.807 5.624-5.479 5.921.432.373.823 1.102.823 2.222 0 1.605-.015 2.898-.015 3.293 0 .324.216.699.826.581A12.004 12.004 0 0 0 12 .296z" />
                        </svg>
                    </a>
                </div>
            </div>


        </footer>
    );
}
