from django.urls import path, include
from .views import (ajax_add_review, category_list_view, category_product_list_view, index, product_detail_view,
                    product_list_view, tag_list, vendor_detail_view, vendor_list_view, search_view, filter_product,
                    add_to_cart, cart_view, delete_item_from_cart, update_cart, checkout_view, payment_completed_view,
                    payment_failed_view, customer_dashboard, order_detail, make_address_default, wishlist_view,
                    add_to_wishlist, remove_wishlist, )

app_name = "core"

urlpatterns = [
    
    # Homepage
    path("", index, name="index"),
    path("products/", product_list_view, name="product_list"),
    path("product/<pid>/", product_detail_view, name="product-detail"),
    
    # Category
    path("category/", category_list_view, name="category-list"),
    path("category/<cid>/", category_product_list_view, name="category-product-list"),
    
    # Vendor
    path("vendor/", vendor_list_view, name="vendor-list"),
    path("vendor/<vid>/", vendor_detail_view, name="vendor-detail"),
    
    # Tags
    path("products/tag/<slug:tag_slug>/", tag_list, name="tags"),
    
    # Add Review
    path("ajax-add-review/<int:pid>/", ajax_add_review, name="ajax-add-review"),
    
    # Search
    path("search/", search_view, name="search"),
    
    # Filter product URL
    path("filter-products/", filter_product, name="filter-product"),

    path("add-to-cart/", add_to_cart, name="add-to-cart"),
    
    # Add to cart URL
    path("add-to-cart/", add_to_cart, name="add-to-cart"),

    # Cart Page URL
    path("cart/", cart_view, name="cart"),
    
    # Delete ITem from Cart
    path("delete-from-cart/", delete_item_from_cart, name="delete-from-cart"),
    
    # Delete ITem from Cart
    path("update-cart/", update_cart, name="update-cart"),

    # Checkout URL
    path("checkout/", checkout_view, name="checkout"),
    
    # Paypal URL
    path('paypal/', include('paypal.standard.ipn.urls')),
    
    # Payment Successful
    path("payment-completed/", payment_completed_view, name="payment-completed"),

    # Payment Failed
    path("payment-failed/", payment_failed_view, name="payment-failed"),

    # Dashboard URL
    path("dashboard/", customer_dashboard, name="dashboard"),

    # Order Detail URL
    path("dashboard/order/<int:id>", order_detail, name="order-detail"),

    # Make Address Default
    path('make-default-address/', make_address_default, name="make-default-address"),

    # wishlist page
    path("wishlist/", wishlist_view, name="wishlist"),

    # adding to wishlist
    path("add-to-wishlist/", add_to_wishlist, name="add-to-wishlist"),

    # Removing from wishlist
    path("remove-from-wishlist/", remove_wishlist, name="remove-from-wishlist"),
]
