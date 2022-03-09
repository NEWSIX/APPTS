(function() {
    var quiz;
  
    $(document).ready(function() {
      return quiz.init();
    });
  
    quiz = {
      init: function() {
        return this.bind_events();
      },
      bind_events: function() {
        return $(document).on("click", ".btn-check1", function(e) {
          return quiz.check1();
        });
      },
      check1: function() {
        var correct, i, incorrect;
        i = 1;
        correct = 0;
        incorrect = 0;
        $(".question").each(function() {
          var checked_count, correct_checked, correct_count, val;
          val = $("input:radio[name='question-" + i + "']:checked").val();
          correct_count = 0;
          correct_checked = 0;
          checked_count = 0;
          $("input:checkbox[name='question-" + i + "']").each(function() {
            if ($(this).attr("value") === "true") {
              correct_count++;
              if ($(this).is(":checked")) {
                correct_checked++;
              }
            }
            if ($(this).is(":checked")) {
              return checked_count++;
            }
          });
          if (correct_count > 0 && correct_count === correct_checked && checked_count === correct_count) {
            val = "true";
          }
          $(this).removeClass("success error");
          if (val === "true") {
            $(this).addClass("success");
            correct++;
          } else {
            $(this).addClass("error");
            incorrect++;
          }
          return i++;
        });
        return $(".result").html("Du hast <strong>" + correct + " Fragen richtig</strong> beantwortet und <strong>" + incorrect + " falsch</strong>.").show();
      }
    };
  
  }).call(this);
  
  //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBOztFQUFBLENBQUEsQ0FBRSxRQUFGLENBQVcsQ0FBQyxLQUFaLENBQWtCLFFBQUEsQ0FBQSxDQUFBO1dBQ2hCLElBQUksQ0FBQyxJQUFMLENBQUE7RUFEZ0IsQ0FBbEI7O0VBR0EsSUFBQSxHQUNFO0lBQUEsSUFBQSxFQUFNLFFBQUEsQ0FBQSxDQUFBO2FBQ0osSUFBQyxDQUFBLFdBQUQsQ0FBQTtJQURJLENBQU47SUFHQSxXQUFBLEVBQWEsUUFBQSxDQUFBLENBQUE7YUFDWCxDQUFBLENBQUUsUUFBRixDQUFXLENBQUMsRUFBWixDQUFlLE9BQWYsRUFBd0IsWUFBeEIsRUFBc0MsUUFBQSxDQUFDLENBQUQsQ0FBQTtlQUNwQyxJQUFJLENBQUMsS0FBTCxDQUFBO01BRG9DLENBQXRDO0lBRFcsQ0FIYjtJQU9BLEtBQUEsRUFBTyxRQUFBLENBQUEsQ0FBQTtBQUNULFVBQUEsT0FBQSxFQUFBLENBQUEsRUFBQTtNQUFJLENBQUEsR0FBSTtNQUNKLE9BQUEsR0FBVTtNQUNWLFNBQUEsR0FBWTtNQUNaLENBQUEsQ0FBRSxXQUFGLENBQWMsQ0FBQyxJQUFmLENBQW9CLFFBQUEsQ0FBQSxDQUFBO0FBQ3hCLFlBQUEsYUFBQSxFQUFBLGVBQUEsRUFBQSxhQUFBLEVBQUE7UUFBTSxHQUFBLEdBQU0sQ0FBQSxDQUFFLDZCQUFBLEdBQThCLENBQTlCLEdBQWdDLFlBQWxDLENBQStDLENBQUMsR0FBaEQsQ0FBQTtRQUVOLGFBQUEsR0FBZ0I7UUFDaEIsZUFBQSxHQUFrQjtRQUNsQixhQUFBLEdBQWdCO1FBQ2hCLENBQUEsQ0FBRSxnQ0FBQSxHQUFpQyxDQUFqQyxHQUFtQyxJQUFyQyxDQUEwQyxDQUFDLElBQTNDLENBQWdELFFBQUEsQ0FBQSxDQUFBO1VBQzlDLElBQUcsQ0FBQSxDQUFFLElBQUYsQ0FBTyxDQUFDLElBQVIsQ0FBYSxPQUFiLENBQUEsS0FBeUIsTUFBNUI7WUFDRSxhQUFBO1lBQ0EsSUFBRyxDQUFBLENBQUUsSUFBRixDQUFPLENBQUMsRUFBUixDQUFXLFVBQVgsQ0FBSDtjQUNFLGVBQUEsR0FERjthQUZGOztVQUlBLElBQUcsQ0FBQSxDQUFFLElBQUYsQ0FBTyxDQUFDLEVBQVIsQ0FBVyxVQUFYLENBQUg7bUJBQ0UsYUFBQSxHQURGOztRQUw4QyxDQUFoRDtRQU9BLElBQUcsYUFBQSxHQUFnQixDQUFoQixJQUFxQixhQUFBLEtBQWlCLGVBQXRDLElBQXlELGFBQUEsS0FBaUIsYUFBN0U7VUFDRSxHQUFBLEdBQU0sT0FEUjs7UUFHQSxDQUFBLENBQUUsSUFBRixDQUFPLENBQUMsV0FBUixDQUFvQixlQUFwQjtRQUNBLElBQUcsR0FBQSxLQUFPLE1BQVY7VUFDRSxDQUFBLENBQUUsSUFBRixDQUFPLENBQUMsUUFBUixDQUFpQixTQUFqQjtVQUNBLE9BQUEsR0FGRjtTQUFBLE1BQUE7VUFJRSxDQUFBLENBQUUsSUFBRixDQUFPLENBQUMsUUFBUixDQUFpQixPQUFqQjtVQUNBLFNBQUEsR0FMRjs7ZUFNQSxDQUFBO01BdkJrQixDQUFwQjthQXdCQSxDQUFBLENBQUUsU0FBRixDQUFZLENBQUMsSUFBYixDQUFrQixrQkFBQSxHQUFxQixPQUFyQixHQUErQixtREFBL0IsR0FBcUYsU0FBckYsR0FBaUcsbUJBQW5ILENBQXVJLENBQUMsSUFBeEksQ0FBQTtJQTVCSztFQVBQO0FBSkYiLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeSAtPlxuICBxdWl6LmluaXQoKVxuICBcbnF1aXogPVxuICBpbml0OiAtPlxuICAgIEBiaW5kX2V2ZW50cygpXG4gICAgXG4gIGJpbmRfZXZlbnRzOiAtPlxuICAgICQoZG9jdW1lbnQpLm9uIFwiY2xpY2tcIiwgXCIuYnRuLWNoZWNrXCIsIChlKSAtPlxuICAgICAgcXVpei5jaGVjaygpXG4gICAgICBcbiAgY2hlY2s6IC0+XG4gICAgaSA9IDFcbiAgICBjb3JyZWN0ID0gMFxuICAgIGluY29ycmVjdCA9IDBcbiAgICAkKFwiLnF1ZXN0aW9uXCIpLmVhY2ggLT5cbiAgICAgIHZhbCA9ICQoXCJpbnB1dDpyYWRpb1tuYW1lPSdxdWVzdGlvbi1cIitpK1wiJ106Y2hlY2tlZFwiKS52YWwoKVxuXG4gICAgICBjb3JyZWN0X2NvdW50ID0gMFxuICAgICAgY29ycmVjdF9jaGVja2VkID0gMFxuICAgICAgY2hlY2tlZF9jb3VudCA9IDBcbiAgICAgICQoXCJpbnB1dDpjaGVja2JveFtuYW1lPSdxdWVzdGlvbi1cIitpK1wiJ11cIikuZWFjaCAtPlxuICAgICAgICBpZiAkKHRoaXMpLmF0dHIoXCJ2YWx1ZVwiKSA9PSBcInRydWVcIlxuICAgICAgICAgIGNvcnJlY3RfY291bnQrK1xuICAgICAgICAgIGlmICQodGhpcykuaXMoXCI6Y2hlY2tlZFwiKVxuICAgICAgICAgICAgY29ycmVjdF9jaGVja2VkKytcbiAgICAgICAgaWYgJCh0aGlzKS5pcyhcIjpjaGVja2VkXCIpXG4gICAgICAgICAgY2hlY2tlZF9jb3VudCsrXG4gICAgICBpZiBjb3JyZWN0X2NvdW50ID4gMCAmJiBjb3JyZWN0X2NvdW50ID09IGNvcnJlY3RfY2hlY2tlZCAmJiBjaGVja2VkX2NvdW50ID09IGNvcnJlY3RfY291bnRcbiAgICAgICAgdmFsID0gXCJ0cnVlXCJcblxuICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcInN1Y2Nlc3MgZXJyb3JcIik7XG4gICAgICBpZiB2YWwgPT0gXCJ0cnVlXCJcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcInN1Y2Nlc3NcIik7XG4gICAgICAgIGNvcnJlY3QrK1xuICAgICAgZWxzZVxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwiZXJyb3JcIik7XG4gICAgICAgIGluY29ycmVjdCsrXG4gICAgICBpKytcbiAgICAkKFwiLnJlc3VsdFwiKS5odG1sKFwiRHUgaGFzdCA8c3Ryb25nPlwiICsgY29ycmVjdCArIFwiIEZyYWdlbiByaWNodGlnPC9zdHJvbmc+IGJlYW50d29ydGV0IHVuZCA8c3Ryb25nPlwiICsgaW5jb3JyZWN0ICsgXCIgZmFsc2NoPC9zdHJvbmc+LlwiKS5zaG93KCk7Il19
  //# sourceURL=coffeescript