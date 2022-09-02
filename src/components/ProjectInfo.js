import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Projects } from './Projects';
import Code from './Code';


function ProjectInfo({ id }) {
    const location = useLocation();
    const sort = "${sort}";
    const API_KEY = "${API_KEY}";
    const code = `<?php
    $args = array(
        'post_type'      => 'ho-testimonial',
        'orderby'        => 'rand',
        'posts_per_page' => '1'
    );

    $query = new WP_Query( $args );

    if ( $query -> have_posts() ){
        while ( $query -> have_posts() ) {
            $query -> the_post();
            ?>
            <h2>Testimonial</h2>
            <?php
            the_content();
        }
        wp_reset_postdata();
    } 
?>`;
    const secondCode = `<Routes>
    <Route path="/" element={<PageHome sort="popular" />} />
    <Route path="/sort/popular" element={<PageHome sort="popular" />} />
    <Route path="/sort/top-rated" element={<PageHome sort="top_rated" />} />
    <Route path="/sort/now-playing" element={<PageHome sort="now_playing" />} />
    <Route path="/sort/upcoming" element={<PageHome sort="upcoming" />} />
    <Route path="/movie/:id" element={<PageSingleMovie />} />
    <Route path="about" element={<PageAbout />} />
    <Route path="favs" element={<PageFavs />} />
    <Route path="search" element={<PageSearch />}/>
</Routes>`;

    const thirdCode = `function PageHome( {sort} ) {

        const [moviesData, setMoviesData] = useState([]);
    
        const fetchMovies = async () => {
            const res = await fetch('https://api.themoviedb.org/3/movie/${sort}?api_key=${API_KEY}&language=en-US&page=1');
            let moviesDataFromAPI = await res.json();
            moviesDataFromAPI = moviesDataFromAPI.results.splice(0, 20);
            setMoviesData(moviesDataFromAPI);
        }
        useEffect(() => {
            fetchMovies();
        }, [sort]); 
        `;

    const fourthCode = `function NavSort() {
            return (
                <nav className="nav-sort">
                    <ul>
                        <li>
                            <NavLink to="/sort/popular">Popular</NavLink>
                        </li>
                        <li>
                            <NavLink to="/sort/top-rated">Top Rated</NavLink>
                        </li>
                        <li>
                            <NavLink to="/sort/now-playing">Now Playing</NavLink>
                        </li>
                        <li>
                            <NavLink to="/sort/upcoming">Upcoming</NavLink>
                        </li>
                    </ul>
                </nav>
            );
        }`;

    return (
        <section className="project">
            <div className="project-wrapper">
                <div className="project-image">
                    <img src={Projects[id].headerImage} alt="a website displaying on 4 different devices" />
                </div>
                <div className="project-title">
                    <h3>{Projects[id].type}</h3>
                    <h2>{Projects[id].name}</h2>
                </div>
                <article className="first">
                    <div className="spec">
                        <h3>Project Specification</h3>
                        <br />
                        <p>Duration: <span>{Projects[id].duration}</span></p>
                        <p>Tools: <span>{Projects[id].tools}</span></p>
                        <p>Involvement: <span>{Projects[id].involvement}</span></p>
                        <p>Responsiveness: <span>{Projects[id].responsiveness}</span></p>
                        <p>Team: <span>{Projects[id].team}</span></p>
                        <div className="links">
                            <a href={Projects[id].live}>Live Site</a>
                            <a href={Projects[id].github}>GitHub</a>
                        </div>
                    </div>
                    <div className="overview">
                        <h3>Project Oveview</h3>
                        <br />
                        <p>{Projects[id].overview}</p>
                    </div>
                </article>
                {location.pathname === "/works/0/honey-oat" ? (
                    <>
                        <article className="features">
                            <div className="features-title">
                                <h3>Features</h3>
                            </div>
                            <div className="features-wrapper">
                                <div className="features-left">
                                    <Code code={code} language="js" />
                                </div>
                                <div className="features-right">
                                    <p>Custom post type for testimonials is created and registered to manage contents for testimonials. It is mainly done by creating a CPT Taxonomy php file within inc folder. The WordPress backend site now shows post archive for testimonials where clients can easily access and register as many testimonials as they want. After this step is simply writing PHP script to call the post type by its name and run WP_Query and display the_content() within the loop.</p>
                                </div>
                            </div>
                        </article>
                        <article className="colors">
                            <h3>Color Design</h3>
                            <div className="color-palette">
                                <h4>Color Palette</h4>
                                <div className="color-palette-wrapper">
                                    <div className="color-sample">
                                        <div className="color" id="musky-green"></div>
                                        <p>#81B29A</p>
                                    </div>
                                    <div className="color-sample">
                                        <div className="color" id="atlantic"></div>
                                        <p>#155370</p>
                                    </div>
                                    <div className="color-sample">
                                        <div className="color" id="burnt-sienna"></div>
                                        <p>#E07A5F</p>
                                    </div>
                                    <div className="color-sample">
                                        <div className="color" id="naples-yellow"></div>
                                        <p>#F2CC8F</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </>
                ) : location.pathname === "/works/1/movie-galaxy" ? (
                    <>
                        <article className="features">
                            <div className="features-title">
                                <h3>Features</h3>
                            </div>
                            <div className="features-wrapper">
                                <div className="features-left">
                                    <Code code={secondCode} language="js" />
                                </div>
                                <div className="features-right">
                                    <p>In the main AppRouter component, I am passing down a state with a prop named "sort" with value of "popular" so I can retrieve the data in the child component.</p>
                                </div>
                                <div className="features-left">
                                    <Code code={thirdCode} language="js" />
                                </div>
                                <div className="features-right">
                                    <p>In the main homepage, I am using await fetch() to retrieve relevant data through an API call but only by the "sort" props, which in this case is "popular" movies.</p>
                                </div>
                                <div className="features-left">
                                    <Code code={fourthCode} language="js" />
                                </div>
                                <div className="features-right">
                                    <p>Each navigation that has sorting names such as "popular" and "upcoming", the data will be retrieved and displayed from fetching API according to the right sort names and it will happen every render by using useEffect() hook.</p>
                                </div>
                            </div>
                        </article>
                        <article className="colors">
                            <h3>Color Design</h3>
                            <div className="color-palette">
                                <h4>Color Palette</h4>
                                <div className="color-palette-wrapper">
                                    <div className="color-sample">
                                        <div className="color" id="white"></div>
                                        <p>#ffffff</p>
                                    </div>
                                    <div className="color-sample">
                                        <div className="color" id="black"></div>
                                        <p>#000000</p>
                                    </div>
                                    <div className="color-sample">
                                        <div className="color" id="light-green"></div>
                                        <p>#54deac</p>
                                    </div>
                                    <div className="color-sample">
                                        <div className="color" id="orange"></div>
                                        <p>#d49621</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </>
                ) : location.pathname === "/works/2/portfolio" ? (
                    <article className="colors">
                        <h3>Color Design</h3>
                        <div className="color-palette">
                            <h4>Color Palette</h4>
                            <div className="color-palette-wrapper">
                                <div className="color-sample">
                                    <div className="color" id="white"></div>
                                    <p>#ffffff</p>
                                </div>
                                <div className="color-sample">
                                    <div className="color" id="black"></div>
                                    <p>#000000</p>
                                </div>
                                <div className="color-sample">
                                    <div className="color" id="blue"></div>
                                    <p>#4a83b7</p>
                                </div>
                                <div className="color-sample">
                                    <div className="color" id="darkblue"></div>
                                    <p>#1352a2</p>
                                </div>
                            </div>
                        </div>
                    </article>
                ) : null}
                {Projects[id].takeaway &&
                    <article className="takeaway">
                        <h3>Take Away</h3>
                        <div className="takeaway-wrapper">
                            <p>{Projects[id].takeaway}</p>
                        </div>
                    </article>
                }
                <div className="cta">
                    <Link to="/works"><div className="cta-button">View More Work!</div></Link>
                </div>
            </div>
        </section>
    );
}

export default ProjectInfo;