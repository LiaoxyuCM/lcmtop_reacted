import type { ComponentType } from 'react';
import { NavBar, FooterBase, Cursor } from './childpage/modules/dynamic_components';
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
