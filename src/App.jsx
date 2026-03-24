import { useState } from 'react';
import Login from './components/Login';
import MapView from './components/MapView';
import BakerDashboard from './components/BakerDashboard';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Profile from './components/Profile';
import BottomNav from './components/BottomNav';
import './index.css';
import './index.css';

function App() {
  const [userRole, setUserRole] = useState(null); // 'BAKER' or 'EATER'
  const [currentView, setCurrentView] = useState('map'); // 'map', 'dashboard', 'product', 'cart', 'profile'
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  if (!userRole) {
      return <Login onLogin={(role) => {
          setUserRole(role);
          setCurrentView(role === 'BAKER' ? 'dashboard' : 'map');
      }} />;
  }

  const handleAddToCart = (item) => {
      setCart([...cart, item]);
      setCurrentView('cart');
  };

  const handleCheckout = () => {
      alert("Mock Apple Pay: Order Confirmed!");
      setCart([]);
      setCurrentView('map');
  };

  const handleSelectProduct = (product) => {
      setSelectedProduct(product);
      setCurrentView('product');
  };

  const handleLogout = () => {
      setUserRole(null);
      setCart([]);
  };

  const renderView = () => {
      // BAKER VIEWS
      if (userRole === 'BAKER') {
          switch(currentView) {
              case 'dashboard': return <BakerDashboard onGoHome={handleLogout} />;
              case 'map': return <MapView userRole={userRole} onGoHome={handleLogout} />;
              case 'profile': return <Profile userRole={userRole} onLogout={handleLogout} />;
              default: return <BakerDashboard onGoHome={handleLogout} />;
          }
      }
      
      // EATER VIEWS
      switch(currentView) {
          case 'map': 
              return <MapView userRole={userRole} onGoHome={handleLogout} onSelectProduct={handleSelectProduct} />;
          case 'product': 
            return <ProductDetail 
                product={selectedProduct}
                onBack={() => setCurrentView('map')} 
                onAddToCart={handleAddToCart}
            />;
          case 'cart':
              return <Cart 
                  cartItems={cart} 
                  onCheckout={handleCheckout} 
                  onBack={() => setCurrentView('map')} 
              />;
          case 'profile':
              return <Profile userRole={userRole} onLogout={handleLogout} />;
          default: return <MapView userRole={userRole} onGoHome={handleLogout} onSelectProduct={handleSelectProduct} />;
      }
  };

  return (
    <div className="mobile-container">
      {renderView()}
      
      {/* Product Detail takes full screen without BottomNav in original mock usually, but keeping it visible for navigation flow unless specified */}
      {currentView !== 'product' && userRole !== 'GUEST' && (
          <BottomNav 
              userRole={userRole} 
              currentView={currentView}
              onNavigate={setCurrentView}
          />
      )}
    </div>
  );
}

export default App;
