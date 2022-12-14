import React from "react";
import { Routes, Route } from "react-router-dom";
import Forget from "./Forget";
import Homepage from "./Homepage";
import Login from "./Login";
import Account from "./Account";
import AccountSetting from "./Setting/AccountSetting";
import ApplicationSetting from "./Setting/ApplicationSetting";
import NotificationSetting from "./Setting/NotificationSetting";
import PasswordSetting from "./Setting/PasswordSetting";
import SecuritySetting from "./Setting/SecuritySetting";
import Setting from "./Setting/Setting";
import Signup from "./Signup";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget" element={<Forget />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/setting" element={<Setting />}>
          <Route index element={<AccountSetting />} />
          <Route path="password" element={<PasswordSetting />} />
          <Route path="security" element={<SecuritySetting />} />
          <Route path="application" element={<ApplicationSetting />} />
          <Route path="notification" element={<NotificationSetting />} />
        </Route>
        <Route path="/myAccount" element={<Account />} />
      </Routes>
    </div>
  );
}

export default App;
