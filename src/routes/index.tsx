import { FC, FunctionComponentElement } from 'react';
import LayoutIndex from './LayoutIndex';

export interface IRoute {
  path: string;
  component: FC
  children?: IRoute[]
  element?: FunctionComponentElement<{}>
}

export const routers = [
  {
    path: '',
    component: () => <LayoutIndex />,
    children: [
      {
        path: '/',
        component: lazy(() => import('@/pages/CanvasTest')),
      },
    ],
  }
]

export const changeRouter = (routers: IRoute[]) => {
  return routers.map((route: IRoute) => {
    if (route.children) {
      route.children = changeRouter(route.children)
      route.element = (
        <Suspense>
          <route.component />
        </Suspense>
      )
    } else {
      route.element =
        <Suspense>
          <route.component />
        </Suspense>
    }
    return route
  })
}

export const getRouters = () => changeRouter(routers)
