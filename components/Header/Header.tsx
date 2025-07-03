import Link from "next/link";
import css from "./Header.module.css"
import TagsMenu from "../TagsMenu/TagsMenu";
// import { getCategories } from "@/lib/api";



const Header = () => {
  // const categories = await getCategories();

return (
  <header className={css.header}>
    <Link href="/" aria-label="Home">NoteHub</Link>
    <nav aria-label="Main Navigation">
      <ul className={css.navigation}>
        <li>
            <Link href="/" className={css.menuContainer}>Home</Link>
        </li>
        <li>
          <TagsMenu/>
        </li>
      </ul>
    </nav>
  </header>


    )
}

export default Header;