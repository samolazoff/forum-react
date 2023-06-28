import AppHeader from '../app-header/AppHeader';
import AppFooter from '../app-footer/AppFooter';
import Users from '../users/Users';

import './app.sass';

function App() {
  return (
  <div className="app flx-c">
    <AppHeader></AppHeader>
    <main className='app-main'>
      <Users></Users>
    </main>
    <AppFooter></AppFooter>
  </div>
  );
}

export default App;
