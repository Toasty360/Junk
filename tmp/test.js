function startPlayer() {
  var Player = {
    try_reload: true,
    seek_time: false,
    secondsPlayed: 0,
    secondsPlayed2: 0,
    interval: false,
    interval2: false,
    player: false,
    engine: false,
    changeNeedle: true,
    watching_counter: false,
    recapchaSubmit: function (form, elem) {
      var formData = $("#player-captcha").serialize();
      $.ajax({
        url: $("#player-captcha").attr("action") + "&actionCaptcha=true",
        type: $("#player-captcha").attr("method"),
        data: formData,
        dataType: "text",
        success: function (data) {
          var response = atob(data);
          response = yjgbHJGhnnbHGN(response);
          response = JSON.parse(response);
          if (response !== "none") {
            Player.playerServer(response);
          } else {
            $(".PFneNxrIsg").hide();
            $(".CtrEKwlzDB").show();
          }
        },
      });
    },
    getLinks: function (server, lang = false) {
      var url = location.pathname;
      if (lang && lang != "false" && lang != "true" && lang != true) {
        if (lang == "es-419") {
          lang = "la";
        }
        var arr = location.pathname.split("/");
        var new_url = [];
        $.each(arr, function (k, v) {
          if (v.length != 2) {
            new_url.push(v);
          }
        });
        url = "/" + lang + new_url.join("/");
      }
      if (!$(".WicSzgszdp").length) {
        $("._asdmhyasdasfkj213").addClass("open");
      } else if (
        !$(".WicSzgszdp[data-value='server_2']").length &&
        !$(".WicSzgszdp[data-value='server_1']").length &&
        !$(".WicSzgszdp[data-value='server_mp4']").length &&
        !$(".WicSzgszdp[data-value='server_6']").length &&
        !$(".WicSzgszdp[data-value='server_4']").length &&
        !$(".WicSzgszdp[data-value='server_3']").length
      ) {
        $("._some_error_wrapper").addClass("open");
      }
      Player.changeNeedle = 0;
      var serverlist_link = "?server=" + server;
      if (server == false) {
        if (!window.reports_history) {
          window.reports_history = [];
        }
        serverlist_link = "?server=server_1";
        if (!$(".WicSzgszdp.JkgCwETYpp").length) {
          window.reports_history.push($($(".WicSzgszdp")[0]).text());
          serverlist_link = "?server=" + $($(".WicSzgszdp")[0]).data("value");
          $($(".WicSzgszdp")[0]).addClass("JkgCwETYpp");
        } else if ($(".WicSzgszdp.JkgCwETYpp").next().length) {
          window.reports_history.push(
            $(".WicSzgszdp.JkgCwETYpp").next().text()
          );
          serverlist_link =
            "?server=" + $(".WicSzgszdp.JkgCwETYpp").next().data("value");
          $(".WicSzgszdp.JkgCwETYpp")
            .removeClass("JkgCwETYpp")
            .next()
            .addClass("JkgCwETYpp");
        } else if (
          $(".WicSzgszdp").last() &&
          !$(".WicSzgszdp").last().hasClass("JkgCwETYpp")
        ) {
          window.reports_history.push($(".WicSzgszdp").last().text());
          serverlist_link = "?server=" + $(".WicSzgszdp").last().data("value");
        } else if (
          $(".WicSzgszdp").last() &&
          $(".WicSzgszdp").last().hasClass("JkgCwETYpp")
        ) {
          window.reports_history.push("Oops");
          $(".PFneNxrIsg").hide();
          if (
            !$(".player-frame").length ||
            $(".player-frame").css("display") != "flex"
          ) {
            $(".CtrEKwlzDB").show();
          }
          return 0;
        } else {
          window.reports_history.push("Server 1");
        }
      }
      $.ajax({
        cache: false,
        type: "get",
        url: url + serverlist_link,
        dataType: "text",
        success: function (data) {
          var response = atob(data);
          response = yjgbHJGhnnbHGN(response);
          response = JSON.parse(response);
          if (response !== "none") {
            Player.playerServer(response);
          } else {
            $(".PFneNxrIsg").hide();
            $(".CtrEKwlzDB").show();
          }
        },
        error: function () {
          Player.onErrorFunction();
        },
      });
    },
    startPlayer: function () {
      Player.getLinks(false);
      return this;
    },
    playerServer: function (data) {
      var servers = $("#wwTJEFOPxQ");
      var serversArr = {
        1: "server_1",
        2: "server_2",
        3: "server_3",
        4: "server_4",
        5: "server_5",
        6: "server_6",
        vip_1: "vip_1",
        vip_2: "vip_2",
        p2p: "p2p",
        server_mp4: "server_mp4",
      };
      if ($(".HSAlgqlFfa>li>span.WHulOvjqEP").length) {
        $(".HSAlgqlFfa>li>span.WHulOvjqEP").removeClass("WHulOvjqEP");
      }
      if (servers.length && servers.hasClass("HNcvbevKbx")) {
        if (data.type == "iframe") {
          servers
            .find(".amjTzHdKvU span")
            .text(
              servers
                .find("[data-value='" + data.type_server + "'] span")
                .text()
            );
          $(".WicSzgszdp.JkgCwETYpp").removeClass("JkgCwETYpp");
          servers
            .find("[data-value='" + data.type_server + "']")
            .addClass("JkgCwETYpp");
        }
        if (
          data[0] &&
          data[0].language &&
          data[0].language.length &&
          serversArr[data[0].type_server] &&
          servers.find(
            "[data-value='" +
              serversArr[data[0].type_server] +
              "'][data-language='" +
              data[0].language +
              "'] span"
          ).length
        ) {
          servers
            .find(".selected-box-title span")
            .text(
              servers
                .find(
                  "[data-value='" +
                    serversArr[data[0].type_server] +
                    "'][data-language='" +
                    data[0].language +
                    "'] span"
                )
                .text()
            );
          $(".WicSzgszdp.JkgCwETYpp").removeClass("JkgCwETYpp");
          servers
            .find(
              "[data-value='" +
                serversArr[data[0].type_server] +
                "'][data-language='" +
                data[0].language +
                "']"
            )
            .addClass("JkgCwETYpp");
        } else if (
          data[0] &&
          serversArr[data[0].type_server] &&
          servers.find(
            "[data-value='" + serversArr[data[0].type_server] + "'] span"
          ).length
        ) {
          servers
            .find(".selected-box-title span")
            .text(
              servers
                .find(
                  "[data-value='" + serversArr[data[0].type_server] + "'] span"
                )
                .text()
            );
          $(".WicSzgszdp.JkgCwETYpp").removeClass("JkgCwETYpp");
          servers
            .find("[data-value='" + serversArr[data[0].type_server] + "']")
            .addClass("JkgCwETYpp");
        }
        Player.modifyLink(data);
      }
    },
    modifyLink: function (data) {
      if ($("#modal_block").length) {
        $("#modal_block").hide();
      }
      $(".PFneNxrIsg").hide();
      if (data.capcha && data.view) {
        if (Player.player && Player.player.getFullscreen()) {
          Player.player.setFullscreen();
        }
        $("#modal_block .modal-content").html(data.view);
        $("#modal_block").removeClass("modal");
        $("#modal_block").show();
        if (data.msg) {
          $.notify(data.msg, "error");
        }
      } else if (data.length == 0) {
        Player.getLinks(false);
        var form_data = new FormData();
        form_data.append("code", "404");
        form_data.append("page", location.href);
        form_data.append("message", "Video not found");
        form_data.append(
          "_csrf-frontend",
          $('meta[name="csrf-token"]').attr("content")
        );
        Player.setError(form_data);
        return false;
      } else if (data.type == "iframe") {
        var new_iframe =
          "<iframe allowfullscreen='true' webkitallowfullscreen='true' mozallowfullscreen='true' frameborder='0' style='height: 100%;width:100%;background: black' id='bfXBTOZMwC' scrolling='no' src='" +
          data.link +
          "'></iframe><div id='wgknFWJuHz'></div>";
        $("#wgknFWJuHz").parent().html(new_iframe);
        Player.setOpenLoad();
      } else {
        Player.startJwPlayer(data);
      }
    },
    setError: function (form_data) {
      $.ajax({
        url: "/play_error",
        type: "post",
        dataType: "json",
        cache: false,
        contentType: false,
        processData: false,
        data: form_data,
      });
    },
    getSubs: function (language) {
      if (window.subtitles.length == 0) {
        return [];
      }
      var validate_language = {};
      for (var i = 0; i < window.subtitles.length; i++) {
        if (!validate_language[window.subtitles[i].label]) {
          validate_language[window.subtitles[i].label] = {
            count: 1,
            flag: false,
            show: 0,
          };
        } else {
          validate_language[window.subtitles[i].label].count++;
          validate_language[window.subtitles[i].label].flag = true;
        }
      }
      var arr = new Array();
      for (var i = 0; i < window.subtitles.length; i++) {
        var label = window.subtitles[i].label;
        if (validate_language[window.subtitles[i].label].flag) {
          label +=
            " " + (validate_language[window.subtitles[i].label].show + 1);
          validate_language[window.subtitles[i].label].count--;
          validate_language[window.subtitles[i].label].show++;
        }
        if (language && window.subtitles[i].lang) {
          if (language == window.subtitles[i].lang) {
            arr.push({
              default: i == 0,
              kind: window.subtitles[i].kind,
              label: label,
              file: window.subtitles[i].src,
            });
          }
        } else {
          arr.push({
            default: i == 0,
            kind: window.subtitles[i].kind,
            label: label,
            file: window.subtitles[i].src,
          });
        }
      }
      return arr;
    },
    getNewSubs: function () {
      window.subtitles = [];
      $.ajax({
        type: "get",
        url:
          "/player/getsubs?type=true&id=" +
          $("#iDgkXUZslQ a.rDpZIFgYdC").data("ep-id"),
        dataType: "json",
        success: function (data) {
          window.subtitles = data;
        },
      });
    },
    newName: function (name) {
      $("#RwRCnTMahi").text(name);
      $(".breadcrumb li.active").text(name);
    },
    onCompleteFunction: function () {
      if (
        (localStorage.getItem("isAutoPlayTrigger") == null ||
          localStorage.getItem("isAutoPlayTrigger") == "1") &&
        $("#iDgkXUZslQ ").length &&
        $("#iDgkXUZslQ  a.rDpZIFgYdC").index() + 1 < $("#iDgkXUZslQ  a").length
      ) {
        var next = $("#iDgkXUZslQ a.rDpZIFgYdC").next();
        var nextLink = next.attr("href");
        window.history.pushState({}, "", nextLink);
        $("#iDgkXUZslQ a.rDpZIFgYdC").removeClass("rDpZIFgYdC");
        next.addClass("rDpZIFgYdC");
        Player.newName(next.text());
        if ($("#iDgkXUZslQ a.rDpZIFgYdC").length) {
          $("#iDgkXUZslQ").scrollLeft(
            ($(".VeuZqfPiml ").width() +
              parseInt($(".VeuZqfPiml").css("margin-left")) * 2) *
              $("#iDgkXUZslQ a.rDpZIFgYdC").index()
          );
        }
        Player.needOnlyLoad = true;
        Player.getNewSubs();
        $(".WicSzgszdp.JkgCwETYpp").removeClass("JkgCwETYpp");
        Player.getLinks(false);
      }
    },
    onErrorFunction: function (e) {
      if (Player.try_reload && $(".WicSzgszdp.JkgCwETYpp")) {
        Player.try_reload = false;
        Player.needOnlyLoad = true;
        Player.seek_time = Player.player.getPosition();
        setTimeout(function () {
          Player.try_reload = true;
        }, 60000);
        var elem = $(".WicSzgszdp.JkgCwETYpp");
        Player.getLinks($(elem).data("value"), $(elem).data("language"));
        return;
      }
      if (
        window.config_player.config.sources &&
        window.config_player.config.sources[
          Player.player.getCurrentQuality() + 1
        ]
      ) {
        Player.player.setCurrentQuality(Player.player.getCurrentQuality() + 1);
        return;
      }
      if (
        !e.message ||
        (e.message != "Casting failed to load" &&
          e.message != "Captions failed to load")
      ) {
        var msg =
          e && e.message && typeof e.message == "string"
            ? Player.player.getConfig().playlistItem.file + " " + e.message
            : Player.player.getConfig().playlistItem.file +
              " Cannot play this link";
        Player.error_count++;
        $("#izYCgIMVBp").show();
        Player.getLinks(false, true, false);
        var form_data = new FormData();
        form_data.append("watch_time", Player.curp);
        form_data.append("src", Player.player.getConfig().playlistItem.file);
        form_data.append("code", 400);
        form_data.append("message", msg);
        form_data.append("page", window.location.href);
        form_data.append(
          "_csrf-frontend",
          $('meta[name="csrf-token"]').attr("content")
        );
        Player.setError(form_data);
        if (Player.error_count == 3) {
          Player.error_count = 0;
        }
        Player.curp = Player.curp ? Player.curp : 1;
        Player.time_success = Player.curp;
        clearInterval(Player.curp_i);
      }
    },
    showMaxQuality: function (data) {
      if (!$(".changeClassLabel").length) {
        var max = false;
        if (
          window.config_player.config.sources &&
          window.config_player.config.sources.length &&
          window.config_player.config.sources[0].max
        ) {
          max = window.config_player.config.sources[0].max;
        }
        if (max) {
          var arr = {
            "2160p": max > 1440 ? true : false,
            "1440p": max > 1080 ? true : false,
            "1080p": max > 720 ? true : false,
            "720p": max > 480 ? true : false,
            "480p": max > 360 ? true : false,
            "360p": max == 360 ? true : false,
          };
          $.each(data, function (k, v) {
            if ($(v).text() != "Auto") {
              if (arr[$(v).text() + "p"] != undefined) {
                arr[$(v).text() + "p"] = false;
              } else {
                arr[$(v).text()] = false;
              }
            }
          });
          var index = 0;
          if ($(data[0]).text() == "Auto") {
            index = 1;
          }
          var insert = "";
          $.each(arr, function (k, v) {
            if (v) {
              insert +=
                '<a href="/user/profile/premium-membership" target="_blank"><button type="button" class="changeClassLabel jw-reset jw-settings-content-item">' +
                k +
                ' (<span style="color: red;">Premium</span>)</button></a>';
            }
          });
          $(insert).insertBefore(data[index]);
          if (insert.length) {
            var max_string = "HD";
            if (max == 720) {
              max_string = "HD";
            } else if (max < 720) {
              max_string = "SD";
            }
            Player.addPopOverADS(max_string);
          }
        }
      }
    },
    addPopOverADS: function (max) {
      if (!$(".sadhjasdjkASDd").length) {
        const HTML_STRUCT =
          "<div class='sadhjasdjkASDd'>This video is available in better quality!<div class='sdahjsad123'><a onclick='$(this).closest(\".sadhjasdjkASDd\").remove();' target='_blank' class='9asdjdsf 67sadhjksadjh' href='/user/profile/premium-membership?utm_source=self&utm_medium=player_popover&utm_campaign=premium-membership&utm_content=undefined'>Get <b>" +
          max +
          "</b></a><div class='9asdjdsf' onclick='$(this).closest(\".sadhjasdjkASDd\").remove();'>Dismiss</div></div></div>";
        $("#wgknFWJuHz").append(HTML_STRUCT);
        $(".sadhjasdjkASDd").css({
          zIndex: "150",
          fontSize: "12px",
          background: "white",
          padding: "10px",
          "border-radius": "8px",
          "max-width": "280px",
          "line-height": "1.4",
          position: "absolute",
          left: "0",
          "margin-top": "10px",
          "margin-left": "10px",
        });
        $(".sdahjsad123").css({
          display: "flex",
          "justify-content": "space-evenly",
          "margin-top": "10px",
          textAlign: "center",
        });
        $(".9asdjdsf").css({
          flex: "40% 0 1",
          "text-align": "center",
          padding: "5px 0",
          border: "1px solid #c3c3c3",
          "border-radius": "6px",
          cursor: "pointer",
        });
        $(".67sadhjksadjh").css({
          textDecoration: "none",
          background: "#18ba83",
          color: "white",
          border: "1px solid #18ba83",
        });
        const positionLeft = $(".jw-logo.jw-reset").position().left;
        const positionTop = $(".jw-logo.jw-reset").position().top;
        if (positionTop && !positionLeft) {
          $(".sadhjasdjkASDd").css({
            top: "0",
          });
        } else {
          $(".sadhjasdjkASDd").css({
            bottom: "60px",
          });
        }
      }
    },
    showAllSubtitles: function (data) {
      if (
        window.subtitles &&
        window.subtitles.length &&
        window.subtitles[0].max &&
        window.subtitles[0].max.length &&
        !$(".changeClassSubtitle").length
      ) {
        var insert = "";
        var arr = {};
        $.each(data, function (k, v) {
          if ($(v).text() != "Off") {
            $.each(window.subtitles[0].max, function (key, value) {
              if (
                value !==
                $(v)
                  .text()
                  .replace(/[^a-z ]/i, "")
                  .trim()
              ) {
                if (typeof arr[value] != "undefined") {
                  arr[value]++;
                } else {
                  arr[value] = 1;
                }
                var number = "";
                if (arr[value] > 1) {
                  number = " " + arr[value].toString();
                }
                insert +=
                  '<a href="/user/profile/premium-membership" target="_blank"><button type="button" class="changeClassSubtitle jw-reset jw-settings-content-item">' +
                  value +
                  number +
                  ' (<span style="color: red;">Premium</span>)</button></a>';
              }
            });
            return false;
          }
        });
        $(insert).insertAfter(data[data.length - 1]);
      }
    },
    onPlayerPlay: function () {
      $(
        ".jw-icon.jw-icon-inline.jw-button-color.jw-reset.jw-icon-rewind"
      ).hide();
      var seekPre = setInterval(function () {
        $("#izYCgIMVBp").hide();
        if ($("#izYCgIMVBp").css("display") == "none") {
          clearInterval(seekPre);
        }
      }, 150);
      if (window.subtitles.length && window.CustomiseCaptionsOption) {
        window.CustomiseCaptionsOption();
      } else {
        $(".bicCOieFXN").hide();
      }
      if (Player.changeNeedle < 3) {
        Player.changeNeedle++;
        if (
          window.config_player.config.sources &&
          window.config_player.config.sources[0] &&
          window.config_player.config.sources[0].language == "en"
        ) {
          $.each($(".jw-reset.jw-settings-submenu"), function () {
            var els = $(this).find("button");
            if (
              $(els[1])
                .text()
                .search(/^(\d+?p|\d+?|auto)$/i) > -1 ||
              $(els[0])
                .text()
                .search(/^(\d+?p|\d+?|auto)$/i) > -1
            ) {
              if (els.length == 7) {
                if (!$(els[1]).hasClass("changeClassLabel")) {
                  $(els[1]).text("2160p");
                }
                if (!$(els[2]).hasClass("changeClassLabel")) {
                  $(els[2]).text("1440p");
                }
                if (!$(els[3]).hasClass("changeClassLabel")) {
                  $(els[3]).text("1080p");
                }
                if (!$(els[4]).hasClass("changeClassLabel")) {
                  $(els[4]).text("720p");
                }
                if (!$(els[5]).hasClass("changeClassLabel")) {
                  $(els[5]).text("480p");
                }
                if (!$(els[6]).hasClass("changeClassLabel")) {
                  $(els[6]).text("360p");
                }
              } else if (els.length == 6) {
                if (!$(els[1]).hasClass("changeClassLabel")) {
                  $(els[1]).text("1440p");
                }
                if (!$(els[2]).hasClass("changeClassLabel")) {
                  $(els[2]).text("1080p");
                }
                if (!$(els[3]).hasClass("changeClassLabel")) {
                  $(els[4]).text("720p");
                }
                if (!$(els[5]).hasClass("changeClassLabel")) {
                  $(els[5]).text("480p");
                }
                if (!$(els[6]).hasClass("changeClassLabel")) {
                  $(els[6]).text("360p");
                }
              } else if (els.length == 5) {
                if (!$(els[1]).hasClass("changeClassLabel")) {
                  $(els[1]).text("1080p");
                }
                if (!$(els[2]).hasClass("changeClassLabel")) {
                  $(els[2]).text("720p");
                }
                if (!$(els[3]).hasClass("changeClassLabel")) {
                  $(els[3]).text("480p");
                }
                if (!$(els[4]).hasClass("changeClassLabel")) {
                  $(els[4]).text("360p");
                }
              } else if (els.length == 4) {
                if (!$(els[1]).hasClass("changeClassLabel")) {
                  $(els[1]).text("720p");
                }
                if (!$(els[2]).hasClass("changeClassLabel")) {
                  $(els[2]).text("480p");
                }
                if (!$(els[3]).hasClass("changeClassLabel")) {
                  $(els[3]).text("360p");
                }
              } else if (els.length == 3) {
                if (!$(els[1]).hasClass("changeClassLabel")) {
                  $(els[1]).text("480p");
                }
                if (!$(els[2]).hasClass("changeClassLabel")) {
                  $(els[2]).text("360p");
                }
              } else if (els.length == 4) {
                if (!$(els[1]).hasClass("changeClassLabel")) {
                  $(els[1]).text("360p");
                }
              }
              Player.showMaxQuality(els);
            } else if ($(els[0]).text() == "Off") {
              Player.showAllSubtitles(els);
            }
          });
        }
      }
      var cntInt = 0;
      var intervarlForHideSTR = setInterval(function () {
        $(".jw-reset.jw-settings-content-item").each(function () {
          if ($(this).text() == "Unknown CC") {
            $(this).remove();
          }
        });
        if (cntInt < 10) {
          cntInt++;
        } else {
          clearInterval(intervarlForHideSTR);
        }
      }, 75);
      if (
        $("#dCtrSoLaPY").length &&
        $("#dCtrSoLaPY").css("display") == "block"
      ) {
        Player.player.pause();
      }
      if ($("#YASVnHhjFR").length) {
        $("#YASVnHhjFR").hide();
      }
      if (!Player.watching_counter) {
        $.ajax({
          cache: false,
          type: "GET",
          url: location.pathname + "?start_watching=true",
          dataType: "JSON",
          success: function (data) {
            Player.watching_counter = true;
          },
          error: function (data) {},
        });
      }
    },
    onTime: function () {
      if (Player.interval) {
        clearInterval(Player.interval);
      }
      if (localStorage.getItem(window.location.pathname)) {
        Player.secondsPlayed = 30;
      }
      Player.interval = setInterval(function () {
        if (Player.secondsPlayed >= 30) {
          Player.showlug();
          clearInterval(Player.interval);
        }
        Player.secondsPlayed++;
      }, 1000);
      if (Player.interval2) {
        clearInterval(Player.interval2);
      }
      Player.interval2 = setInterval(function () {
        Player.secondsPlayed2++;
        localStorage.setItem("watchedTime", Player.secondsPlayed2);
        if (Player.player.getState() == "idle") {
          clearInterval(Player.interval2);
        }
      }, 1000);
    },
    pause: function () {
      if (Player.interval) {
        clearInterval(Player.interval);
      }
      if (Player.interval2) {
        console.log(Player.interval2);
        clearInterval(Player.interval2);
      }
    },
    showlug: function () {
      if (localStorage.getItem(window.location.pathname)) {
        localStorage.removeItem(window.location.pathname);
      }
    },
    readyHandler: function () {
      $(
        ".jw-icon.jw-icon-inline.jw-button-color.jw-reset.jw-icon-rewind"
      ).hide();
      var nextTenSecond =
        '<div role="button" tabindex="0" aria-label="Backward 10 Seconds" style=""><img width="20" height="20" src="/addons/jw-icons/left.png" alt="Movies123"><div class="jw-reset jw-tooltip jw-tooltip-rewind" aria-expanded="true"><div class="jw-text">Backward 10 Seconds</div></div></div>';
      var myFFButton = document.createElement("div");
      myFFButton.id = "kfIINCYrUb_2";
      myFFButton.setAttribute(
        "class",
        "jw-icon jw-icon-inline jw-button-color jw-reset"
      );
      myFFButton.setAttribute(
        "onclick",
        'jwplayer("wgknFWJuHz").seek(jwplayer("wgknFWJuHz").getPosition()-10);'
      );
      myFFButton.setAttribute(
        "onmouseenter",
        '$(this).find(".jw-reset").addClass("jw-open");$(this).find(".jw-reset").attr("aria-expanded","true");'
      );
      myFFButton.setAttribute(
        "onmouseleave",
        '$(this).find(".jw-reset").removeClass("jw-open");$(this).find(".jw-reset").attr("aria-expanded","false");'
      );
      var leftGroup = document.getElementsByClassName(
        "jw-reset jw-button-container"
      )[0];
      leftGroup.insertBefore(myFFButton, leftGroup.childNodes[1]);
      document.getElementById("kfIINCYrUb_2").innerHTML = nextTenSecond;
      var nextTenSecond =
        '<div role="button" tabindex="0" aria-label="Forward 10 Seconds" style=""><img width="20" height="20" src="/addons/jw-icons/right.png" alt="Movies123"><div class="jw-reset jw-tooltip jw-tooltip-rewind" aria-expanded="true"><div class="jw-text">Forward 10 Seconds</div></div></div>';
      var myFFButton = document.createElement("div");
      myFFButton.id = "kfIINCYrUb_1";
      myFFButton.setAttribute(
        "class",
        "jw-icon jw-icon-inline jw-button-color jw-reset"
      );
      myFFButton.setAttribute(
        "onclick",
        'jwplayer("wgknFWJuHz").seek(jwplayer("wgknFWJuHz").getPosition()+10);'
      );
      myFFButton.setAttribute(
        "onmouseenter",
        '$(this).find(".jw-reset").addClass("jw-open");$(this).find(".jw-reset").attr("aria-expanded","true");'
      );
      myFFButton.setAttribute(
        "onmouseleave",
        '$(this).find(".jw-reset").removeClass("jw-open");$(this).find(".jw-reset").attr("aria-expanded","false");'
      );
      var leftGroup = document.getElementsByClassName(
        "jw-reset jw-button-container"
      )[0];
      leftGroup.insertBefore(myFFButton, leftGroup.childNodes[2]);
      document.getElementById("kfIINCYrUb_1").innerHTML = nextTenSecond;
      Player.player.on("play", Player.onPlayerPlay);
      if (
        window.site_utils &&
        window.site_utils.isMobile &&
        !window.site_utils.isMobile()
      ) {
        Player.player.play();
      } else {
        if (!$(Player.playerElem).hasClass("jw-flag-small-player")) {
          $(Player.playerElem).addClass("jw-flag-small-player");
        }
        Player.dispachCheck = true;
        Player.player.on("displayClick", Player.dispachClick);
      }
      jwplayer().on("fullscreen", function () {
        if (
          window.site_utils &&
          window.site_utils.isMobile &&
          window.site_utils.isMobile()
        ) {
          if (jwplayer().getFullscreen()) {
            $(".trailer_link").css({
              pointerEvents: "none",
            });
            $(".media_wrap .right *").css({
              pointerEvents: "none",
            });
          } else {
            $(".trailer_link").css({
              pointerEvents: "all",
            });
            $(".media_wrap .right *").css({
              pointerEvents: "all",
            });
          }
        }
      });
    },
    startJwPlayer: function (data) {
      Player.player = jwplayer("wgknFWJuHz");
      if (
        data[0] &&
        data[0].type &&
        (data[0].type == "hls" || data[0].type == "m3u8")
      ) {
        window.config_player.config.file = data[0].file;
        if (window.config_player.config.sources) {
          delete window.config_player.config.sources;
        }
      } else {
        window.config_player.config.sources = data;
      }
      window.config_player.config.tracks = Player.getSubs(data[0].language);
      $("#bfXBTOZMwC").remove();
      if (Player.needOnlyLoad) {
        Player.player.load(window.config_player.config);
        if (Player.seek_time) {
          Player.player.play().seek(Player.seek_time);
          Player.seek_time = false;
        }
      } else {
        Player.player.setup(window.config_player.config);
        Player.player.on("complete", Player.onCompleteFunction);
        Player.player.on("error", Player.onErrorFunction);
        Player.player.on("ready", Player.readyHandler);
        Player.player.on("play", Player.onTime);
        Player.player.on("pause", Player.pause);
      }
      Player.player.play();
      if (window.innerWidth > 500) {
        if (!window.config_player.buttons) {
          window.config_player.buttons = [];
        }
        $.each(window.config_player.buttons, function (k, v) {
          Player.player.addButton(
            v.icon,
            v.text,
            function () {
              eval(v.action);
            },
            v.id
          );
        });
      }
      if ($("#iDgkXUZslQ").length) {
        Player.player.removeButton("next-ep-btn");
        if ($("#iDgkXUZslQ  a.rDpZIFgYdC").next().length) {
          Player.player.addButton(
            "/addons/jw-icons/next-b.svg",
            "Next episode",
            function () {
              Player.onCompleteThreeFunction();
            },
            "next-ep-btn"
          );
        }
        Player.player.removeButton("prev-ep-btn");
        if ($("#iDgkXUZslQ  a.rDpZIFgYdC").prev().length) {
          Player.player.addButton(
            "/addons/jw-icons/back-b.svg",
            "Previous episode",
            function () {
              Player.onCompleteBeforeFunction();
            },
            "prev-ep-btn"
          );
        }
      }
      Player.player.resize(
        "100%",
        document.getElementById("wgknFWJuHz").offsetWidth * 0.5625
      );
    },
    onCompleteBeforeFunction: function () {
      Player.needOnlyLoad = true;
      window.CustomiseCaptionsOptionTrigger = false;
      if (
        $("#iDgkXUZslQ ").length &&
        $("#iDgkXUZslQ  a.rDpZIFgYdC").index() > 0
      ) {
        var nextLink = $("#iDgkXUZslQ  a.rDpZIFgYdC").prev().attr("href");
        window.history.pushState({}, "", nextLink);
        var next = $("#iDgkXUZslQ  a.rDpZIFgYdC").prev();
        $("#iDgkXUZslQ  a").removeClass("rDpZIFgYdC");
        next.addClass("rDpZIFgYdC");
        Player.newName(next.text());
        if ($("#iDgkXUZslQ a.rDpZIFgYdC").length) {
          $("#iDgkXUZslQ").scrollLeft(
            ($(".VeuZqfPiml ").width() +
              parseInt($(".VeuZqfPiml").css("margin-left")) * 2) *
              $("#iDgkXUZslQ a.rDpZIFgYdC").index()
          );
        }
        Player.getNewSubs();
        $(".WicSzgszdp.JkgCwETYpp").removeClass("JkgCwETYpp");
        Player.getLinks(false);
      }
    },
    onCompleteThreeFunction: function () {
      Player.needOnlyLoad = true;
      window.CustomiseCaptionsOptionTrigger = false;
      if (
        $("#iDgkXUZslQ ").length &&
        $("#iDgkXUZslQ  a.rDpZIFgYdC").index() + 1 < $("#iDgkXUZslQ  a").length
      ) {
        var nextLink = $("#iDgkXUZslQ  a.rDpZIFgYdC").next().attr("href");
        window.history.pushState({}, "", nextLink);
        var next = $("#iDgkXUZslQ  a.rDpZIFgYdC").next();
        $("#iDgkXUZslQ  a").removeClass("rDpZIFgYdC");
        next.addClass("rDpZIFgYdC");
        Player.newName(next.text());
        if ($("#iDgkXUZslQ a.rDpZIFgYdC").length) {
          $("#iDgkXUZslQ").scrollLeft(
            ($(".VeuZqfPiml ").width() +
              parseInt($(".VeuZqfPiml").css("margin-left")) * 2) *
              $("#iDgkXUZslQ a.rDpZIFgYdC").index()
          );
        }
        Player.getNewSubs();
        $(".WicSzgszdp.JkgCwETYpp").removeClass("JkgCwETYpp");
        Player.getLinks(false);
      }
    },
    setOpenLoad: function () {
      var seekPre = setInterval(function () {
        $("#izYCgIMVBp").hide();
        if ($("#izYCgIMVBp").css("display") == "none") {
          clearInterval(seekPre);
        }
      }, 150);
      $.ajax({
        cache: false,
        type: "GET",
        url: location.pathname + "?start_watching",
        dataType: "JSON",
        success: function (data) {
          Player.watching_counter = true;
        },
      });
    },
  };
  function yjgbHJGhnnbHGN(string, key = "88", res = "") {
    for (var i = 0; i < string.length; ) {
      for (
        var j = 0;
        j < "113".toString().length && i < string.length;
        j++, i++
      ) {
        res += String.fromCharCode(
          string[i].charCodeAt(0) ^ "113".toString()[j].charCodeAt(0)
        );
      }
    }
    return res;
  }
  return Player.startPlayer();
}
