import type { ComponentType } from 'react';
import { NavBar, FooterBase, Cursor } from './childpage/modules/template_components.tsx';
// import './index.scss'

function Template(elem: { element: ComponentType }) {
  return (
    <>
      <Cursor />
      <NavBar />
      <div className="mainpare">
        <main>
          <elem.element />
        </main>
      </div>
      <footer>
        <FooterBase />
      </footer>
    </>
  )
}

export default Template
