

function App() {
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
      <div>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <BgmPlayer>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/recommend"
                  element={<Content1 />}
                />
                <Route
                  path="/waiting"
                  element={<ProtectedRoute outlet={<WaitingPage />} isAuthentication={isLogin} />}
                />
                <Route
                  path="/session"
                  element={<ProtectedRoute outlet={<SessionPage />} isAuthentication={isLogin} />}
                />
                <Route
                  path="/login"
                  element={
                    <ProtectedRoute
                      outlet={<LoginPage />}
                      isAuthentication={!isLogin}
                      redirectPath="/main"
                    />
                  }
                />
                <Route
                  path="/mypage"
                  element={<ProtectedRoute outlet={<MyPage />} isAuthentication={socialId} />}
                />
                <Route
                  path="/finalPickResult"
                  element={
                    <ProtectedRoute outlet={<FinalPickResultPage />} isAuthentication={isLogin} />
                  }
                />
                <Route
                  path="/pickAvatar"
                  element={<ProtectedRoute outlet={<PickAvatarPage />} isAuthentication={isLogin} />}
                />
                <Route
                  path="/kakao"
                  element={
                    <ProtectedRoute
                      outlet={<KakaoHandler />}
                      isAuthentication={!isLogin}
                      redirectPath="/main"
                    />
                  }
                />
                <Route
                  path="/naver"
                  element={
                    <ProtectedRoute
                      outlet={<NaverHandler />}
                      isAuthentication={!isLogin}
                      redirectPath="/main"
                    />
                  }
                />
                <Route
                  path="/canvas"
                  element={<ProtectedRoute outlet={<CanvasPage />} isAuthentication={isLogin} />}
                />
                <Route
                  path="/subSession"
                  element={<ProtectedRoute outlet={<SubSessionPage />} isAuthentication={isLogin} />}
                />
                <Route path="/*" element={<NotFoundPage />} />
              </Routes>
            </BgmPlayer>
          </BrowserRouter>
        </ThemeProvider>
      </div>
    );
  }
  