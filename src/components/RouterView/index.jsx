import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

const RouterView = (props) => {
  console.log('%c [ props ]-5', 'font-size:13px; background:pink; color:#bf2c9f;', props.routers)
  return (
    <React.Fragment>
      {location.pathname === '/blog' ? <Navigate replace to='/blog/index' /> : null}
      <Routes>
        {
          ...props.routers.map(item => {
            console.log('%c [ item ]-11', 'font-size:13px; background:pink; color:#bf2c9f;', item)
            return <Route key={item.path} path={item.path} element={item.element} />
          })
        }

        {/* <Route element={}>
          <Route></Route>
        </Route> */}
      </Routes>
    </React.Fragment>
  )
}

export default RouterView
