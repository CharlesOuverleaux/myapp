class CultureTypesController < ApplicationController
    def index
        @culture_types = CultureType.all
      end
end
