/**
 Renders a navigation component with a sticky header, containing a logo and a link to take a quiz.
 @component
 @returns {JSX.Element} The rendered navigation component.
 */
import Image from 'next/image'
import nav from '../app/CSS/nav.module.css'

//The navigation bar at the top of the page
export const Navigation = () => {
    return (
        <div className={nav.navigationBar}>
            <div className={nav.logo}>
                <a href="/">
                    <Image src='./logo.png' alt="Logo for Morell's Mountain" width={250} height={150}></Image>
                </a>
            </div>
            <ul>
                <li>
                    <a href="/">Expenses</a>
                </li>
                <li>
                    <a href="/">Buckets</a>
                </li>
                <li>
                    <a href="/">Calendar</a>
                </li>
                <li>
                    <a href="/">Debt</a>
                </li>
            </ul>
        </div>
    )
}