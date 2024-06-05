console.log("working fine");

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

$("#commentForm").submit(function (e) {
  e.preventDefault();

  let dt = new Date();
  let time =
    dt.getDay() + " " + monthNames[dt.getUTCMonth()] + ", " + dt.getFullYear();

  $.ajax({
    data: $(this).serialize(),

    method: $(this).attr("method"),

    url: $(this).attr("action"),

    dataType: "json",

    success: function (res) {
      console.log("Comment Saved to DB ... ");

      if (res.bool == true) {
        $("#review-res").html("Review added successfully.");
        $(".hide-comment-form").hide();
        $(".add-review").hide();

        let _html =
          '<div class="single-comment justify-content-between d-flex mb-30">';
        _html += '<div class="user justify-content-between d-flex">';
        _html += '<div class="thumb text-center">';
        _html +=
          '<img src="data:image/jpeg;base64,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 " alt="" />';
        _html +=
          '<a href="#" class="font-heading text-brand">' +
          res.context.user +
          "</a>";
        _html += "</div>";

        _html += '<div class="desc">';
        _html += '<div class="d-flex justify-content-between mb-10">';
        _html += '<div class="d-flex align-items-center">';
        _html += '<span class="font-xs text-muted">' + time + " </span>";
        _html += "</div>";

        for (var i = 1; i < -res.context.rating; i++) {
          _html += '<i class="fas fa-star text-warning"></i>';
        }

        _html += "</div>";
        _html += '<p class="mb-10">' + res.context.review + "</p>";

        _html += "</div>";
        _html += "</div>";
        _html += " </div>";

        $(".comment-list").prepend(_html);
      }
    },
  });
});

$(document).ready(function () {
  $(".filter-checkbox, #price-filter-btn").on("click", function () {
    console.log("A checkbox have been clicked");

    let filter_object = {};

    let min_price = $("#max_price").attr("min");
    let max_price = $("#max_price").val();

    filter_object.min_price = min_price;
    filter_object.max_price = max_price;

    $(".filter-checkbox").each(function () {
      let filter_value = $(this).val();
      let filter_key = $(this).data("filter"); // vendor, category

      console.log("Filter value is:", filter_value);
      console.log("Filter key is:", filter_key);

      filter_object[filter_key] = Array.from(
        document.querySelectorAll(
          "input[data-filter=" + filter_key + "]:checked"
        )
      ).map(function (element) {
        return element.value;
      });
    });
    console.log("Filter Object is: ", filter_object);

    $.ajax({
      url: "/filter-products",
      data: filter_object,
      dataType: "json",
      beforeSend: function () {
        console.log("Trying to filter product ... ");
      },
      success: function (response) {
        console.log(response);
        console.log("Data filtred successfully ... ");
        $("#filtered-product").html(response.data);
      },
    });
  });

  $("#max_price").on("blur", function () {
    let min_price = $(this).attr("min");
    let max_price = $(this).attr("max");
    let current_price = $(this).val();

    console.log("Current Price is:", current_price);
    console.log("Max Price is:", max_price);
    console.log("Min Price is:", min_price);

    if (
      current_price < parseInt(min_price) ||
      current_price > parseInt(max_price)
    ) {
      console.log("Price Error Occured");

      min_price = Math.round(min_price * 100) / 100;
      max_price = Math.round(max_price * 100) / 100;

      console.log("Max Price is:", min_price);
      console.log("Min Price is:", max_price);

      alert("Price must between $" + min_price + " and $" + max_price);
      $(this).val(min_price);
      $("#range").val(min_price);

      $(this).focus();

      return false;
    }
  });

  // Add to cart functionality
  $(".add-to-cart-btn").on("click", function () {
    let this_val = $(this);
    let index = this_val.attr("data-index");

    let quantity = $(".product-quantity-" + index).val();
    let product_title = $(".product-title-" + index).val();

    let product_id = $(".product-id-" + index).val();
    let product_price = $(".current-product-price-" + index).text();

    let product_pid = $(".product-pid-" + index).val();
    let product_image = $(".product-image-" + index).val();

    console.log("Quantity:", quantity);
    console.log("Title:", product_title);
    console.log("Price:", product_price);
    console.log("ID:", product_id);
    console.log("PID:", product_pid);
    console.log("Image:", product_image);
    console.log("Index:", index);
    console.log("Currrent Element:", this_val);

    $.ajax({
      url: "/add-to-cart",
      data: {
        id: product_id,
        pid: product_pid,
        image: product_image,
        qty: quantity,
        title: product_title,
        price: product_price,
      },

      dataType: "json",
      beforeSend: function () {
        console.log("Adding Product to Cart ... ");
      },

      success: function (response) {
        this_val.html("✔");
        console.log("Added Product to Cart!");
        $(".cart-items-count").text(response.totalcartitems);
      },
    });
  });

  $(".delete-product").on("click", function () {
    let product_id = $(this).attr("data-product");
    let this_val = $(this);

    console.log("PRoduct ID:", product_id);

    $.ajax({
      url: "/delete-from-cart",
      data: {
        id: product_id,
      },

      dataType: "json",
      beforeSend: function () {
        this_val.hide();
      },

      success: function (response) {
        this_val.show();
        $(".cart-items-count").text(response.totalcartitems);
        $("#cart-list").html(response.data);
      },
    });
  });

  $(".update-product").on("click", function () {
    let product_id = $(this).attr("data-product");
    let this_val = $(this);
    let product_quantity = $(".product-qty-" + product_id).val();

    console.log("PRoduct ID:", product_id);
    console.log("PRoduct QTY:", product_quantity);

    $.ajax({
      url: "/update-cart",
      data: {
        id: product_id,
        qty: product_quantity,
      },

      dataType: "json",
      beforeSend: function () {
        this_val.hide();
      },

      success: function (response) {
        this_val.show();
        $(".cart-items-count").text(response.totalcartitems);
        $("#cart-list").html(response.data);
      },
    });
  });

  // Making Default Address
  $(document).on("click", ".make-default-address", function () {
    let id = $(this).attr("data-address-id");
    let this_val = $(this);

    console.log("ID is:", id);
    console.log("Element is:", this_val);

    $.ajax({
      url: "/make-default-address",
      data: {
        id: id,
      },
      dataType: "json",
      success: function (response) {
        console.log("Address Made Default .... ");
        if (response.boolean == true) {
          $(".check").hide();
          $(".action_btn").show();

          $(".check" + id).show();
          $(".button" + id).hide();
        }
      },
    });
  });

  // Adding to wishlist
  $(document).on("click", ".add-to-wishlist", function () {
    let product_id = $(this).attr("data-product-item");
    let this_val = $(this);

    console.log("PRoduct ID IS", product_id);

    $.ajax({
      url: "/add-to-wishlist",
      data: {
        id: product_id,
      },
      dataType: "json",
      beforeSend: function () {
        console.log("Adding to wish list ...");
      },
      success: function (response) {
        this_val.html("✔");
        if (response.bool === true) {
          console.log("Added to wish list ...");
        }
      },
    });
  });

  // Remove from wishlist
  $(document).on("click", ".delete-wishlist-product", function () {
    let wishlist_id = $(this).attr("data-wishlist-product");
    let this_val = $(this);
    console.log("wishlist id is:", wishlist_id);

    $.ajax({
      url: "/remove-from-wishlist",
      data: {
        id: wishlist_id,
      },
      dataType: "json",
      beforeSend: function () {
        console.log("Deleting product from wishlist ... ");
      },
      success: function (response) {
        $("#wishlist-list").html(response.data);
      },
    });
  });

  $(document).on("submit", "#contact-form-ajax", function (e) {
    e.preventDefault();
    console.log("Submited ... ");

    let full_name = $("#full_name").val();
    let email = $("#email").val();
    let phone = $("#phone").val();
    let subject = $("#subject").val();
    let message = $("#message").val();

    console.log("Name:", full_name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Subject:", subject);
    console.log("MEssage:", message);

    $.ajax({
      url: "/ajax-contact-form",
      data: {
        full_name: full_name,
        email: email,
        phone: phone,
        subject: subject,
        message: message,
      },
      dataType: "json",
      beforeSend: function () {
        console.log("Sending Data to Server ... ");
      },
      success: function (res) {
        console.log("Sent Data to server!");
        $(".contact_us_p").hide();
        $("#contact-form-ajax").hide();
        $("#message-response").html("Message sent successfully.");
      },
    });
  });
});
