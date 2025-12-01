// Google Analytics event tracking utilities

declare global {
  interface Window {
    gtag: (
      command: string,
      eventName: string,
      params?: Record<string, any>
    ) => void;
  }
}

// Track when user adds product to cart
export const trackAddToCart = (product: {
  id: number;
  title: string;
  price: number;
  category?: string;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'add_to_cart', {
      currency: 'MXN',
      value: product.price,
      items: [
        {
          item_id: product.id.toString(),
          item_name: product.title,
          price: product.price,
          item_category: product.category || 'General',
          quantity: 1,
        },
      ],
    });
  }
};

// Track when user removes product from cart
export const trackRemoveFromCart = (product: {
  id: number;
  title: string;
  price: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'remove_from_cart', {
      currency: 'MXN',
      value: product.price,
      items: [
        {
          item_id: product.id.toString(),
          item_name: product.title,
          price: product.price,
          quantity: 1,
        },
      ],
    });
  }
};

// Track when user views cart
export const trackViewCart = (cartItems: any[], total: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'view_cart', {
      currency: 'MXN',
      value: total,
      items: cartItems.map((item) => ({
        item_id: item.id.toString(),
        item_name: item.title,
        price: item.price,
        quantity: 1,
      })),
    });
  }
};

// Track when user starts checkout
export const trackBeginCheckout = (cartItems: any[], total: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'begin_checkout', {
      currency: 'MXN',
      value: total,
      items: cartItems.map((item) => ({
        item_id: item.id.toString(),
        item_name: item.title,
        price: item.price,
        quantity: 1,
      })),
    });
  }
};

// Track when user views product details
export const trackViewItem = (product: {
  id: number;
  title: string;
  price: number;
  category?: string;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'view_item', {
      currency: 'MXN',
      value: product.price,
      items: [
        {
          item_id: product.id.toString(),
          item_name: product.title,
          price: product.price,
          item_category: product.category || 'General',
        },
      ],
    });
  }
};

// Track category clicks
export const trackCategoryClick = (categoryName: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'select_content', {
      content_type: 'category',
      content_id: categoryName,
    });
  }
};

// Track navigation clicks
export const trackNavigation = (destination: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'navigation_click', {
      destination: destination,
    });
  }
};
