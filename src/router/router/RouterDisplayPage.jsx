import routerConfig from "./RouterConfig";
import {Route, Routes} from "react-router-dom";

const RouterDisplayPage = () => {
    const config = routerConfig();
    return (
        <Routes>
            {config.map(({path, component: PageComponent, id}) => {
                return (
                    <Route
                        key={id}
                        path={path}
                        element={<PageComponent/>}
                    />
                )
            })}
        </Routes>
    )
}

export default RouterDisplayPage;