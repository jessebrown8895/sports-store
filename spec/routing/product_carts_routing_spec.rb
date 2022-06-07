require "rails_helper"

RSpec.describe ProductCartsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/product_carts").to route_to("product_carts#index")
    end

    it "routes to #show" do
      expect(get: "/product_carts/1").to route_to("product_carts#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/product_carts").to route_to("product_carts#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/product_carts/1").to route_to("product_carts#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/product_carts/1").to route_to("product_carts#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/product_carts/1").to route_to("product_carts#destroy", id: "1")
    end
  end
end
