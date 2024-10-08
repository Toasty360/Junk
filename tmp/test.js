// var startPlayer = function () {
//   var Player = {
//     try_reload: true,
//     seek_time: false,
//     secondsPlayed: 0,
//     secondsPlayed2: 0,
//     interval: false,
//     interval2: false,
//     player: false,
//     engine: false,
//     changeNeedle: true,
//     watching_counter: false,
//     recapchaSubmit: function (form, elem) {
//       var formData = $("#player-captcha").serialize();
//       $.ajax({
//         url: $("#player-captcha").attr("action") + "&actionCaptcha=true",
//         type: $("#player-captcha").attr("method"),
//         data: formData,
//         dataType: "text",
//         success: function (data) {
//           var response = atob(data);
//           response = yjgbHJGhnnbHGN(response);
//           response = JSON.parse(response);
//           if (response !== "none") {
//             Player.playerServer(response);
//           } else {
//             $(".PFneNxrIsg").hide();
//             $(".CtrEKwlzDB").show();
//           }
//         },
//       });
//     },
//     getLinks: function (server, lang = false) {
//       var url = location.pathname;
//       if (lang && lang != "false" && lang != "true" && lang != true) {
//         if (lang == "es-419") {
//           lang = "la";
//         }
//         var arr = location.pathname.split("/");
//         var new_url = [];
//         $.each(arr, function (k, v) {
//           if (v.length != 2) {
//             new_url.push(v);
//           }
//         });
//         url = "/" + lang + new_url.join("/");
//       }
//       if (!$(".WicSzgszdp").length) {
//         $("._asdmhyasdasfkj213").addClass("open");
//       } else if (
//         !$(".WicSzgszdp[data-value='server_2']").length &&
//         !$(".WicSzgszdp[data-value='server_1']").length &&
//         !$(".WicSzgszdp[data-value='server_mp4']").length &&
//         !$(".WicSzgszdp[data-value='server_6']").length &&
//         !$(".WicSzgszdp[data-value='server_4']").length &&
//         !$(".WicSzgszdp[data-value='server_3']").length
//       ) {
//         $("._some_error_wrapper").addClass("open");
//       }
//       Player.changeNeedle = 0;
//       var serverlist_link = "?server=" + server;
//       if (server == false) {
//         if (!window.reports_history) {
//           window.reports_history = [];
//         }
//         serverlist_link = "?server=server_1";
//         if (!$(".WicSzgszdp.JkgCwETYpp").length) {
//           window.reports_history.push($($(".WicSzgszdp")[0]).text());
//           serverlist_link = "?server=" + $($(".WicSzgszdp")[0]).data("value");
//           $($(".WicSzgszdp")[0]).addClass("JkgCwETYpp");
//         } else if ($(".WicSzgszdp.JkgCwETYpp").next().length) {
//           window.reports_history.push(
//             $(".WicSzgszdp.JkgCwETYpp").next().text()
//           );
//           serverlist_link =
//             "?server=" + $(".WicSzgszdp.JkgCwETYpp").next().data("value");
//           $(".WicSzgszdp.JkgCwETYpp")
//             .removeClass("JkgCwETYpp")
//             .next()
//             .addClass("JkgCwETYpp");
//         } else if (
//           $(".WicSzgszdp").last() &&
//           !$(".WicSzgszdp").last().hasClass("JkgCwETYpp")
//         ) {
//           window.reports_history.push($(".WicSzgszdp").last().text());
//           serverlist_link = "?server=" + $(".WicSzgszdp").last().data("value");
//         } else if (
//           $(".WicSzgszdp").last() &&
//           $(".WicSzgszdp").last().hasClass("JkgCwETYpp")
//         ) {
//           window.reports_history.push("Oops");
//           $(".PFneNxrIsg").hide();
//           if (
//             !$(".player-frame").length ||
//             $(".player-frame").css("display") != "flex"
//           ) {
//             $(".CtrEKwlzDB").show();
//           }
//           return 0;
//         } else {
//           window.reports_history.push("Server 1");
//         }
//       }
//       $.ajax({
//         cache: false,
//         type: "get",
//         url: url + serverlist_link,
//         dataType: "text",
//         success: function (data) {
//           var response = atob(data);
//           response = yjgbHJGhnnbHGN(response);
//           response = JSON.parse(response);
//           if (response !== "none") {
//             Player.playerServer(response);
//           } else {
//             $(".PFneNxrIsg").hide();
//             $(".CtrEKwlzDB").show();
//           }
//         },
//         error: function () {
//           Player.onErrorFunction();
//         },
//       });
//     },
//     startPlayer: function () {
//       Player.getLinks(false);
//       return this;
//     },
//     playerServer: function (data) {
//       var servers = $("#wwTJEFOPxQ"),
//         serversArr = {
//           1: "server_1",
//           2: "server_2",
//           3: "server_3",
//           4: "server_4",
//           5: "server_5",
//           6: "server_6",
//           vip_1: "vip_1",
//           vip_2: "vip_2",
//           p2p: "p2p",
//           server_mp4: "server_mp4",
//         };
//       if ($(".HSAlgqlFfa>li>span.WHulOvjqEP").length) {
//         $(".HSAlgqlFfa>li>span.WHulOvjqEP").removeClass("WHulOvjqEP");
//       }
//       if (servers.length && servers.hasClass("HNcvbevKbx")) {
//         if (data.type == "iframe") {
//           servers
//             .find(".amjTzHdKvU span")
//             .text(
//               servers
//                 .find("[data-value='" + data.type_server + "'] span")
//                 .text()
//             );
//           $(".WicSzgszdp.JkgCwETYpp").removeClass("JkgCwETYpp");
//           servers
//             .find("[data-value='" + data.type_server + "']")
//             .addClass("JkgCwETYpp");
//         }
//         if (
//           data[0] &&
//           data[0].language &&
//           data[0].language.length &&
//           serversArr[data[0].type_server] &&
//           servers.find(
//             "[data-value='" +
//               serversArr[data[0].type_server] +
//               "'][data-language='" +
//               data[0].language +
//               "'] span"
//           ).length
//         ) {
//           servers
//             .find(".selected-box-title span")
//             .text(
//               servers
//                 .find(
//                   "[data-value='" +
//                     serversArr[data[0].type_server] +
//                     "'][data-language='" +
//                     data[0].language +
//                     "'] span"
//                 )
//                 .text()
//             );
//           $(".WicSzgszdp.JkgCwETYpp").removeClass("JkgCwETYpp");
//           servers
//             .find(
//               "[data-value='" +
//                 serversArr[data[0].type_server] +
//                 "'][data-language='" +
//                 data[0].language +
//                 "']"
//             )
//             .addClass("JkgCwETYpp");
//         } else if (
//           data[0] &&
//           serversArr[data[0].type_server] &&
//           servers.find(
//             "[data-value='" + serversArr[data[0].type_server] + "'] span"
//           ).length
//         ) {
//           servers
//             .find(".selected-box-title span")
//             .text(
//               servers
//                 .find(
//                   "[data-value='" + serversArr[data[0].type_server] + "'] span"
//                 )
//                 .text()
//             );
//           $(".WicSzgszdp.JkgCwETYpp").removeClass("JkgCwETYpp");
//           servers
//             .find("[data-value='" + serversArr[data[0].type_server] + "']")
//             .addClass("JkgCwETYpp");
//         }
//         Player.modifyLink(data);
//       }
//     },
//     modifyLink: function (data) {
//       if ($("#modal_block").length) {
//         $("#modal_block").hide();
//       }
//       $(".PFneNxrIsg").hide();
//       if (data.capcha && data.view) {
//         if (Player.player && Player.player.getFullscreen()) {
//           Player.player.setFullscreen();
//         }
//         $("#modal_block .modal-content").html(data.view);
//         $("#modal_block").removeClass("modal");
//         $("#modal_block").show();
//         if (data.msg) {
//           $.notify(data.msg, "error");
//         }
//       } else if (data.length == 0) {
//         Player.getLinks(false);
//         var form_data = new FormData();
//         form_data.append("code", "404");
//         form_data.append("page", location.href);
//         form_data.append("message", "Video not found");
//         form_data.append(
//           "_csrf-frontend",
//           $('meta[name="csrf-token"]').attr("content")
//         );
//         Player.setError(form_data);
//         return false;
//       } else if (data.type == "iframe") {
//         var new_iframe =
//           "<iframe allowfullscreen='true' webkitallowfullscreen='true' mozallowfullscreen='true' frameborder='0' style='height: 100%;width:100%;background: black' id='bfXBTOZMwC' scrolling='no' src='" +
//           data.link +
//           "'></iframe><div id='wgknFWJuHz'></div>";
//         $("#wgknFWJuHz").parent().html(new_iframe);
//         Player.setOpenLoad();
//       } else {
//         Player.startJwPlayer(data);
//       }
//     },
//     setError: function (form_data) {
//       $.ajax({
//         url: "/play_error",
//         type: "post",
//         dataType: "json",
//         cache: false,
//         contentType: false,
//         processData: false,
//         data: form_data,
//       });
//     },
//     getSubs: function (language) {
//       if (window.subtitles.length == 0) {
//         return [];
//       }
//       var validate_language = {};
//       for (var i = 0; i < window.subtitles.length; i++) {
//         if (!validate_language[window.subtitles[i].label]) {
//           validate_language[window.subtitles[i].label] = {
//             count: 1,
//             flag: false,
//             show: 0,
//           };
//         } else {
//           validate_language[window.subtitles[i].label]["count"]++;
//           validate_language[window.subtitles[i].label]["flag"] = true;
//         }
//       }
//       var arr = new Array();
//       for (var i = 0; i < window.subtitles.length; i++) {
//         var label = window.subtitles[i].label;
//         if (validate_language[window.subtitles[i].label]["flag"]) {
//           label +=
//             " " + (validate_language[window.subtitles[i].label]["show"] + 1);
//           validate_language[window.subtitles[i].label]["count"]--;
//           validate_language[window.subtitles[i].label]["show"]++;
//         }
//         if (language && window.subtitles[i].lang) {
//           if (language == window.subtitles[i].lang) {
//             arr.push({
//               default: i == 0,
//               kind: window.subtitles[i].kind,
//               label: label,
//               file: window.subtitles[i].src,
//             });
//           }
//         } else {
//           arr.push({
//             default: i == 0,
//             kind: window.subtitles[i].kind,
//             label: label,
//             file: window.subtitles[i].src,
//           });
//         }
//       }
//       return arr;
//     },
//     getNewSubs: function () {
//       window.subtitles = [];
//       $.ajax({
//         type: "get",
//         url:
//           "/player/getsubs?type=true&id=" +
//           $("#iDgkXUZslQ a.rDpZIFgYdC").data("ep-id"),
//         dataType: "json",
//         success: function (data) {
//           window.subtitles = data;
//         },
//       });
//     },
//     newName: function (name) {
//       $("#RwRCnTMahi").text(name);
//       $(".breadcrumb li.active").text(name);
//     },
//     onCompleteFunction: function () {
//       if (
//         (localStorage.getItem("isAutoPlayTrigger") == null ||
//           localStorage.getItem("isAutoPlayTrigger") == "1") &&
//         $("#iDgkXUZslQ ").length &&
//         $("#iDgkXUZslQ  a.rDpZIFgYdC").index() + 1 < $("#iDgkXUZslQ  a").length
//       ) {
//         var next = $("#iDgkXUZslQ a.rDpZIFgYdC").next();
//         var nextLink = next.attr("href");
//         window.history.pushState({}, "", nextLink);
//         $("#iDgkXUZslQ a.rDpZIFgYdC").removeClass("rDpZIFgYdC");
//         next.addClass("rDpZIFgYdC");
//         Player.newName(next.text());
//         if ($("#iDgkXUZslQ a.rDpZIFgYdC").length) {
//           $("#iDgkXUZslQ").scrollLeft(
//             ($(".VeuZqfPiml ").width() +
//               parseInt($(".VeuZqfPiml").css("margin-left")) * 2) *
//               $("#iDgkXUZslQ a.rDpZIFgYdC").index()
//           );
//         }
//         Player.needOnlyLoad = true;
//         Player.getNewSubs();
//         $(".WicSzgszdp.JkgCwETYpp").removeClass("JkgCwETYpp");
//         Player.getLinks(false);
//       }
//     },
//     onErrorFunction: function (e) {
//       if (Player.try_reload && $(".WicSzgszdp.JkgCwETYpp")) {
//         Player.try_reload = false;
//         Player.needOnlyLoad = true;
//         Player.seek_time = Player.player.getPosition();
//         setTimeout(function () {
//           Player.try_reload = true;
//         }, 1000 * 60);
//         var elem = $(".WicSzgszdp.JkgCwETYpp");
//         Player.getLinks($(elem).data("value"), $(elem).data("language"));
//         return;
//       }
//       if (
//         window.config_player.config.sources &&
//         window.config_player.config.sources[
//           Player.player.getCurrentQuality() + 1
//         ]
//       ) {
//         Player.player.setCurrentQuality(Player.player.getCurrentQuality() + 1);
//         return;
//       }
//       if (
//         !(
//           e.message &&
//           (e.message == "Casting failed to load" ||
//             e.message == "Captions failed to load")
//         )
//       ) {
//         var msg =
//           e && e.message && typeof e.message == "string"
//             ? Player.player.getConfig().playlistItem.file + " " + e.message
//             : Player.player.getConfig().playlistItem.file +
//               " Cannot play this link";
//         Player.error_count++;
//         $("#izYCgIMVBp").show();
//         Player.getLinks(false, true, false);
//         var form_data = new FormData();
//         form_data.append("watch_time", Player.curp);
//         form_data.append("src", Player.player.getConfig().playlistItem.file);
//         form_data.append("code", 400);
//         form_data.append("message", msg);
//         form_data.append("page", window.location.href);
//         form_data.append(
//           "_csrf-frontend",
//           $('meta[name="csrf-token"]').attr("content")
//         );
//         Player.setError(form_data);
//         if (Player.error_count == 3) {
//           Player.error_count = 0;
//         }
//         Player.curp = Player.curp ? Player.curp : 1;
//         Player.time_success = Player.curp;
//         clearInterval(Player.curp_i);
//       }
//     },
//     showMaxQuality: function (data) {
//       if (!$(".changeClassLabel").length) {
//         var max = false;
//         if (
//           window.config_player.config.sources &&
//           window.config_player.config.sources.length &&
//           window.config_player.config.sources[0].max
//         ) {
//           max = window.config_player.config.sources[0].max;
//         }
//         if (max) {
//           var arr = {
//             "2160p": max > 1440 ? true : false,
//             "1440p": max > 1080 ? true : false,
//             "1080p": max > 720 ? true : false,
//             "720p": max > 480 ? true : false,
//             "480p": max > 360 ? true : false,
//             "360p": max == 360 ? true : false,
//           };
//           $.each(data, function (k, v) {
//             if ($(v).text() != "Auto") {
//               if (arr[$(v).text() + "p"] != undefined) {
//                 arr[$(v).text() + "p"] = false;
//               } else {
//                 arr[$(v).text()] = false;
//               }
//             }
//           });
//           var index = 0;
//           if ($(data[0]).text() == "Auto") {
//             index = 1;
//           }
//           var insert = "";
//           $.each(arr, function (k, v) {
//             if (v) {
//               insert +=
//                 '<a href="/user/profile/premium-membership" target="_blank"><button type="button" class="changeClassLabel jw-reset jw-settings-content-item">' +
//                 k +
//                 ' (<span style="color: red;">Premium</span>)</button></a>';
//             }
//           });
//           $(insert).insertBefore(data[index]);
//           if (insert.length) {
//             var max_string = "HD";
//             if (max == 720) {
//               max_string = "HD";
//             } else if (max < 720) {
//               max_string = "SD";
//             }
//             Player.addPopOverADS(max_string);
//           }
//         }
//       }
//     },
//     addPopOverADS: function (max) {
//       if (!$(".sadhjasdjkASDd").length) {
//         const HTML_STRUCT =
//           "<div class='sadhjasdjkASDd'>This video is available in better quality!" +
//           "<div class='sdahjsad123'>" +
//           "<a onclick='$(this).closest(\".sadhjasdjkASDd\").remove();' target='_blank' class='9asdjdsf 67sadhjksadjh' href='/user/profile/premium-membership?utm_source=self&utm_medium=player_popover&utm_campaign=premium-membership&utm_content=undefined'>" +
//           "Get <b>" +
//           max +
//           "</b>" +
//           "</a>" +
//           "<div class='9asdjdsf' onclick='$(this).closest(\".sadhjasdjkASDd\").remove();'>Dismiss</div>" +
//           "</div>" +
//           "</div>";
//         $("#wgknFWJuHz").append(HTML_STRUCT);
//         $(".sadhjasdjkASDd").css({
//           zIndex: "150",
//           fontSize: "12px",
//           background: "white",
//           padding: "10px",
//           "border-radius": "8px",
//           "max-width": "280px",
//           "line-height": "1.4",
//           position: "absolute",
//           left: "0",
//           "margin-top": "10px",
//           "margin-left": "10px",
//         });
//         $(".sdahjsad123").css({
//           display: "flex",
//           "justify-content": "space-evenly",
//           "margin-top": "10px",
//           textAlign: "center",
//         });
//         $(".9asdjdsf").css({
//           flex: "40% 0 1",
//           "text-align": "center",
//           padding: "5px 0",
//           border: "1px solid #c3c3c3",
//           "border-radius": "6px",
//           cursor: "pointer",
//         });
//         $(".67sadhjksadjh").css({
//           textDecoration: "none",
//           background: "#18ba83",
//           color: "white",
//           border: "1px solid #18ba83",
//         });
//         const positionLeft = $(".jw-logo.jw-reset").position().left;
//         const positionTop = $(".jw-logo.jw-reset").position().top;
//         if (positionTop && !positionLeft) {
//           $(".sadhjasdjkASDd").css({ top: "0" });
//         } else {
//           $(".sadhjasdjkASDd").css({ bottom: "60px" });
//         }
//       }
//     },
//     showAllSubtitles: function (data) {
//       if (
//         window.subtitles &&
//         window.subtitles.length &&
//         window.subtitles[0]["max"] &&
//         window.subtitles[0]["max"].length &&
//         !$(".changeClassSubtitle").length
//       ) {
//         var insert = "";
//         var arr = {};
//         $.each(data, function (k, v) {
//           if ($(v).text() != "Off") {
//             $.each(window.subtitles[0]["max"], function (key, value) {
//               if (
//                 value !==
//                 $(v)
//                   .text()
//                   .replace(/[^a-z ]/i, "")
//                   .trim()
//               ) {
//                 if (typeof arr[value] != "undefined") {
//                   arr[value]++;
//                 } else {
//                   arr[value] = 1;
//                 }
//                 var number = "";
//                 if (arr[value] > 1) {
//                   number = " " + arr[value].toString();
//                 }
//                 insert +=
//                   '<a href="/user/profile/premium-membership" target="_blank"><button type="button" class="changeClassSubtitle jw-reset jw-settings-content-item">' +
//                   value +
//                   number +
//                   ' (<span style="color: red;">Premium</span>)</button></a>';
//               }
//             });
//             return false;
//           }
//         });
//         $(insert).insertAfter(data[data.length - 1]);
//       }
//     },
//     onPlayerPlay: function () {
//       $(
//         ".jw-icon.jw-icon-inline.jw-button-color.jw-reset.jw-icon-rewind"
//       ).hide();
//       var seekPre = setInterval(function () {
//         $("#izYCgIMVBp").hide();
//         if ($("#izYCgIMVBp").css("display") == "none") {
//           clearInterval(seekPre);
//         }
//       }, 150);
//       if (window.subtitles.length && window.CustomiseCaptionsOption) {
//         window.CustomiseCaptionsOption();
//       } else {
//         $(".bicCOieFXN").hide();
//       }
//       if (Player.changeNeedle < 3) {
//         Player.changeNeedle++;
//         if (
//           window.config_player.config.sources &&
//           window.config_player.config.sources[0] &&
//           window.config_player.config.sources[0].language == "en"
//         ) {
//           $.each($(".jw-reset.jw-settings-submenu"), function () {
//             var els = $(this).find("button");
//             if (
//               $(els[1])
//                 .text()
//                 .search(/^(\d+?p|\d+?|auto)$/i) > -1 ||
//               $(els[0])
//                 .text()
//                 .search(/^(\d+?p|\d+?|auto)$/i) > -1
//             ) {
//               if (els.length == 7) {
//                 if (!$(els[1]).hasClass("changeClassLabel")) {
//                   $(els[1]).text("2160p");
//                 }
//                 if (!$(els[2]).hasClass("changeClassLabel")) {
//                   $(els[2]).text("1440p");
//                 }
//                 if (!$(els[3]).hasClass("changeClassLabel")) {
//                   $(els[3]).text("1080p");
//                 }
//                 if (!$(els[4]).hasClass("changeClassLabel")) {
//                   $(els[4]).text("720p");
//                 }
//                 if (!$(els[5]).hasClass("changeClassLabel")) {
//                   $(els[5]).text("480p");
//                 }
//                 if (!$(els[6]).hasClass("changeClassLabel")) {
//                   $(els[6]).text("360p");
//                 }
//               } else if (els.length == 6) {
//                 if (!$(els[1]).hasClass("changeClassLabel")) {
//                   $(els[1]).text("1440p");
//                 }
//                 if (!$(els[2]).hasClass("changeClassLabel")) {
//                   $(els[2]).text("1080p");
//                 }
//                 if (!$(els[3]).hasClass("changeClassLabel")) {
//                   $(els[4]).text("720p");
//                 }
//                 if (!$(els[5]).hasClass("changeClassLabel")) {
//                   $(els[5]).text("480p");
//                 }
//                 if (!$(els[6]).hasClass("changeClassLabel")) {
//                   $(els[6]).text("360p");
//                 }
//               } else if (els.length == 5) {
//                 if (!$(els[1]).hasClass("changeClassLabel")) {
//                   $(els[1]).text("1080p");
//                 }
//                 if (!$(els[2]).hasClass("changeClassLabel")) {
//                   $(els[2]).text("720p");
//                 }
//                 if (!$(els[3]).hasClass("changeClassLabel")) {
//                   $(els[3]).text("480p");
//                 }
//                 if (!$(els[4]).hasClass("changeClassLabel")) {
//                   $(els[4]).text("360p");
//                 }
//               } else if (els.length == 4) {
//                 if (!$(els[1]).hasClass("changeClassLabel")) {
//                   $(els[1]).text("720p");
//                 }
//                 if (!$(els[2]).hasClass("changeClassLabel")) {
//                   $(els[2]).text("480p");
//                 }
//                 if (!$(els[3]).hasClass("changeClassLabel")) {
//                   $(els[3]).text("360p");
//                 }
//               } else if (els.length == 3) {
//                 if (!$(els[1]).hasClass("changeClassLabel")) {
//                   $(els[1]).text("480p");
//                 }
//                 if (!$(els[2]).hasClass("changeClassLabel")) {
//                   $(els[2]).text("360p");
//                 }
//               } else if (els.length == 4) {
//                 if (!$(els[1]).hasClass("changeClassLabel")) {
//                   $(els[1]).text("360p");
//                 }
//               }
//               Player.showMaxQuality(els);
//             } else if ($(els[0]).text() == "Off") {
//               Player.showAllSubtitles(els);
//             }
//           });
//         }
//       }
//       var cntInt = 0;
//       var intervarlForHideSTR = setInterval(function () {
//         $(".jw-reset.jw-settings-content-item").each(function () {
//           if ($(this).text() == "Unknown CC") {
//             $(this).remove();
//           }
//         });
//         if (cntInt < 10) {
//           cntInt++;
//         } else {
//           clearInterval(intervarlForHideSTR);
//         }
//       }, 75);
//       if (
//         $("#dCtrSoLaPY").length &&
//         $("#dCtrSoLaPY").css("display") == "block"
//       ) {
//         Player.player.pause();
//       }
//       if ($("#YASVnHhjFR").length) {
//         $("#YASVnHhjFR").hide();
//       }
//       if (!Player.watching_counter) {
//         $.ajax({
//           cache: false,
//           type: "GET",
//           url: location.pathname + "?start_watching=true",
//           dataType: "JSON",
//           success: function (data) {
//             Player.watching_counter = true;
//           },
//           error: function (data) {},
//         });
//       }
//     },
//     onTime: function () {
//       if (Player.interval) {
//         clearInterval(Player.interval);
//       }
//       if (localStorage.getItem(window.location.pathname)) {
//         Player.secondsPlayed = 30;
//       }
//       Player.interval = setInterval(function () {
//         if (Player.secondsPlayed >= 30) {
//           Player.showlug();
//           clearInterval(Player.interval);
//         }
//         Player.secondsPlayed++;
//       }, 1000);
//       if (Player.interval2) {
//         clearInterval(Player.interval2);
//       }
//       Player.interval2 = setInterval(function () {
//         Player.secondsPlayed2++;
//         localStorage.setItem("watchedTime", Player.secondsPlayed2);
//         if (Player.player.getState() == "idle") {
//           clearInterval(Player.interval2);
//         }
//       }, 1000);
//     },
//     pause: function () {
//       if (Player.interval) {
//         clearInterval(Player.interval);
//       }
//       if (Player.interval2) {
//         console.log(Player.interval2);
//         clearInterval(Player.interval2);
//       }
//     },
//     showlug: function () {
//       if (
//         $(".player-frame").length > 0 &&
//         $(".player-frame").css("display") != "flex"
//       ) {
//         if (Player.player && Player.player.getFullscreen()) {
//           Player.player.setFullscreen();
//         }
//         setInterval(function () {
//           if (Player.player.getState() != "paused") {
//             Player.player.pause();
//             Player.player.stop();
//           }
//         }, 1000);
//         $(".player-frame").css("display", "flex");
//         var object_json = {
//           v: "5.7.3",
//           fr: 25,
//           ip: 0,
//           op: 125,
//           w: 200,
//           h: 200,
//           nm: "Comp 2",
//           ddd: 0,
//           assets: [],
//           fonts: {
//             list: [
//               {
//                 fName: "ProximaNova-Bold",
//                 fFamily: "Proxima Nova",
//                 fStyle: "Bold",
//                 ascent: 66.69921875,
//               },
//               {
//                 fName: "ProximaNova-Regular",
//                 fFamily: "Proxima Nova",
//                 fStyle: "Regular",
//                 ascent: 66.69921875,
//               },
//             ],
//           },
//           layers: [
//             {
//               ddd: 0,
//               ind: 1,
//               ty: 5,
//               nm: " bandwidth  overloaded",
//               sr: 1,
//               ks: {
//                 o: { a: 0, k: 100, ix: 11 },
//                 r: { a: 0, k: 0, ix: 10 },
//                 p: { a: 0, k: [98.5, 123, 0], ix: 2 },
//                 a: { a: 0, k: [0, 0, 0], ix: 1 },
//                 s: { a: 0, k: [100, 100, 100], ix: 6 },
//               },
//               ao: 0,
//               t: {
//                 d: {
//                   k: [
//                     {
//                       s: {
//                         s: 14,
//                         f: "ProximaNova-Regular",
//                         t: " bandwidth \roverloaded",
//                         j: 2,
//                         tr: 0,
//                         lh: 15,
//                         ls: 0,
//                         fc: [0.6, 0.6, 0.6],
//                       },
//                       t: 0,
//                     },
//                   ],
//                 },
//                 p: {},
//                 m: { g: 1, a: { a: 0, k: [0, 0], ix: 2 } },
//                 a: [],
//               },
//               ip: 0,
//               op: 1000,
//               st: 0,
//               bm: 0,
//             },
//             {
//               ddd: 0,
//               ind: 2,
//               ty: 4,
//               nm: "% Outlines",
//               sr: 1,
//               ks: {
//                 o: { a: 0, k: 100, ix: 11 },
//                 r: { a: 0, k: 0, ix: 10 },
//                 p: {
//                   a: 1,
//                   k: [
//                     {
//                       i: { x: 0.667, y: 1 },
//                       o: { x: 0.333, y: 0 },
//                       t: 17,
//                       s: [122.529, 88.427, 0],
//                       to: [1.167, 0, 0],
//                       ti: [-1.167, 0, 0],
//                     },
//                     {
//                       i: { x: 0.667, y: 0.667 },
//                       o: { x: 0.333, y: 0.333 },
//                       t: 21,
//                       s: [129.529, 88.427, 0],
//                       to: [0, 0, 0],
//                       ti: [0, 0, 0],
//                     },
//                     {
//                       i: { x: 0.667, y: 1 },
//                       o: { x: 0.333, y: 0 },
//                       t: 27,
//                       s: [129.529, 88.427, 0],
//                       to: [1.333, 0, 0],
//                       ti: [0, 0, 0],
//                     },
//                     {
//                       i: { x: 0.667, y: 1 },
//                       o: { x: 0.333, y: 0 },
//                       t: 31,
//                       s: [137.529, 88.427, 0],
//                       to: [0, 0, 0],
//                       ti: [0, 0, 0],
//                     },
//                     {
//                       i: { x: 0.667, y: 1 },
//                       o: { x: 0.333, y: 0 },
//                       t: 35,
//                       s: [129.529, 88.427, 0],
//                       to: [0, 0, 0],
//                       ti: [0, 0, 0],
//                     },
//                     {
//                       i: { x: 0.667, y: 1 },
//                       o: { x: 0.333, y: 0 },
//                       t: 39,
//                       s: [137.529, 88.427, 0],
//                       to: [0, 0, 0],
//                       ti: [0, 0, 0],
//                     },
//                     {
//                       i: { x: 0.667, y: 1 },
//                       o: { x: 0.167, y: 0 },
//                       t: 43,
//                       s: [129.529, 88.427, 0],
//                       to: [0, 0, 0],
//                       ti: [0, 0, 0],
//                     },
//                     {
//                       i: { x: 0.667, y: 1 },
//                       o: { x: 0.333, y: 0 },
//                       t: 47,
//                       s: [137.529, 88.427, 0],
//                       to: [0, 0, 0],
//                       ti: [1.333, 0, 0],
//                     },
//                     { t: 51, s: [129.529, 88.427, 0] },
//                   ],
//                   ix: 2,
//                 },
//                 a: { a: 0, k: [0.007, -12.073, 0], ix: 1 },
//                 s: {
//                   a: 1,
//                   k: [
//                     {
//                       i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] },
//                       o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] },
//                       t: 27,
//                       s: [100, 100, 100],
//                     },
//                     {
//                       i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] },
//                       o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] },
//                       t: 31,
//                       s: [120, 120, 100],
//                     },
//                     {
//                       i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] },
//                       o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] },
//                       t: 35,
//                       s: [100, 100, 100],
//                     },
//                     {
//                       i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] },
//                       o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] },
//                       t: 39,
//                       s: [120, 120, 100],
//                     },
//                     {
//                       i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] },
//                       o: { x: [0.167, 0.167, 0.167], y: [0, 0, 0] },
//                       t: 43,
//                       s: [100, 100, 100],
//                     },
//                     {
//                       i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] },
//                       o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] },
//                       t: 47,
//                       s: [120, 120, 100],
//                     },
//                     { t: 51, s: [100, 100, 100] },
//                   ],
//                   ix: 6,
//                 },
//               },
//               ao: 0,
//               shapes: [
//                 {
//                   ty: "gr",
//                   it: [
//                     {
//                       ind: 0,
//                       ty: "sh",
//                       ix: 1,
//                       ks: {
//                         a: 0,
//                         k: {
//                           i: [
//                             [-2.465, 0],
//                             [0, 2.248],
//                             [2.49, 0],
//                             [0, -2.272],
//                           ],
//                           o: [
//                             [2.49, 0],
//                             [0, -2.272],
//                             [-2.465, 0],
//                             [0, 2.248],
//                           ],
//                           v: [
//                             [-4.371, -8.339],
//                             [-0.262, -12.302],
//                             [-4.371, -16.363],
//                             [-8.455, -12.302],
//                           ],
//                           c: true,
//                         },
//                         ix: 2,
//                       },
//                       nm: "%",
//                       mn: "ADBE Vector Shape - Group",
//                       hd: false,
//                     },
//                     {
//                       ind: 1,
//                       ty: "sh",
//                       ix: 2,
//                       ks: {
//                         a: 0,
//                         k: {
//                           i: [
//                             [0, 0],
//                             [0, 0],
//                             [0, 0],
//                             [0, 0],
//                           ],
//                           o: [
//                             [0, 0],
//                             [0, 0],
//                             [0, 0],
//                             [0, 0],
//                           ],
//                           v: [
//                             [-4.129, 0],
//                             [6.192, -16.121],
//                             [4.355, -16.121],
//                             [-5.942, 0],
//                           ],
//                           c: true,
//                         },
//                         ix: 2,
//                       },
//                       nm: "%",
//                       mn: "ADBE Vector Shape - Group",
//                       hd: false,
//                     },
//                     {
//                       ind: 2,
//                       ty: "sh",
//                       ix: 3,
//                       ks: {
//                         a: 0,
//                         k: {
//                           i: [
//                             [-2.465, 0],
//                             [0, 2.248],
//                             [2.465, 0],
//                             [0, -2.272],
//                           ],
//                           o: [
//                             [2.465, 0],
//                             [0, -2.272],
//                             [-2.465, 0],
//                             [0, 2.248],
//                           ],
//                           v: [
//                             [4.5, 0.29],
//                             [8.609, -3.698],
//                             [4.5, -7.759],
//                             [0.415, -3.698],
//                           ],
//                           c: true,
//                         },
//                         ix: 2,
//                       },
//                       nm: "%",
//                       mn: "ADBE Vector Shape - Group",
//                       hd: false,
//                     },
//                     {
//                       ind: 3,
//                       ty: "sh",
//                       ix: 4,
//                       ks: {
//                         a: 0,
//                         k: {
//                           i: [
//                             [1.112, 0],
//                             [0, 1.257],
//                             [-1.088, 0],
//                             [0, -1.354],
//                           ],
//                           o: [
//                             [-1.088, 0],
//                             [0, -1.354],
//                             [1.112, 0],
//                             [0, 1.257],
//                           ],
//                           v: [
//                             [-4.371, -10.224],
//                             [-6.28, -12.302],
//                             [-4.371, -14.454],
//                             [-2.461, -12.302],
//                           ],
//                           c: true,
//                         },
//                         ix: 2,
//                       },
//                       nm: "%",
//                       mn: "ADBE Vector Shape - Group",
//                       hd: false,
//                     },
//                     {
//                       ind: 4,
//                       ty: "sh",
//                       ix: 5,
//                       ks: {
//                         a: 0,
//                         k: {
//                           i: [
//                             [1.112, 0],
//                             [0, 1.305],
//                             [-1.112, 0],
//                             [0, -1.329],
//                           ],
//                           o: [
//                             [-1.112, 0],
//                             [0, -1.329],
//                             [1.112, 0],
//                             [0, 1.305],
//                           ],
//                           v: [
//                             [4.5, -1.595],
//                             [2.59, -3.698],
//                             [4.5, -5.849],
//                             [6.433, -3.698],
//                           ],
//                           c: true,
//                         },
//                         ix: 2,
//                       },
//                       nm: "%",
//                       mn: "ADBE Vector Shape - Group",
//                       hd: false,
//                     },
//                     {
//                       ty: "mm",
//                       mm: 1,
//                       nm: "Merge Paths 1",
//                       mn: "ADBE Vector Filter - Merge",
//                       hd: false,
//                     },
//                     {
//                       ty: "fl",
//                       c: {
//                         a: 1,
//                         k: [
//                           {
//                             i: { x: [0.667], y: [1] },
//                             o: { x: [0.333], y: [0] },
//                             t: 21,
//                             s: [1, 1, 1, 1],
//                           },
//                           {
//                             t: 27,
//                             s: [
//                               0.929411828518, 0.184313729405, 0.40784317255,
//                               0.839215755463,
//                             ],
//                           },
//                         ],
//                         ix: 4,
//                       },
//                       o: { a: 0, k: 100, ix: 5 },
//                       r: 1,
//                       bm: 0,
//                       nm: "Fill 1",
//                       mn: "ADBE Vector Graphic - Fill",
//                       hd: false,
//                     },
//                     {
//                       ty: "tr",
//                       p: { a: 0, k: [0, 0], ix: 2 },
//                       a: { a: 0, k: [0, 0], ix: 1 },
//                       s: { a: 0, k: [100, 100], ix: 3 },
//                       r: { a: 0, k: 0, ix: 6 },
//                       o: { a: 0, k: 100, ix: 7 },
//                       sk: { a: 0, k: 0, ix: 4 },
//                       sa: { a: 0, k: 0, ix: 5 },
//                       nm: "Transform",
//                     },
//                   ],
//                   nm: "%",
//                   np: 8,
//                   cix: 2,
//                   bm: 0,
//                   ix: 1,
//                   mn: "ADBE Vector Group",
//                   hd: false,
//                 },
//               ],
//               ip: 0,
//               op: 1000,
//               st: 0,
//               bm: 0,
//             },
//             {
//               ddd: 0,
//               ind: 3,
//               ty: 5,
//               nm: "80",
//               sr: 1,
//               ks: {
//                 o: {
//                   a: 1,
//                   k: [
//                     {
//                       i: { x: [0.667], y: [1] },
//                       o: { x: [0.333], y: [0] },
//                       t: 3.12,
//                       s: [100],
//                     },
//                     { t: 7.2802734375, s: [0] },
//                   ],
//                   ix: 11,
//                 },
//                 r: { a: 0, k: 0, ix: 10 },
//                 p: {
//                   a: 1,
//                   k: [
//                     {
//                       i: { x: 0.667, y: 1 },
//                       o: { x: 0.333, y: 0 },
//                       t: 3.12,
//                       s: [90.507, 91.427, 0],
//                       to: [0, -4.833, 0],
//                       ti: [0, 4.833, 0],
//                     },
//                     { t: 13, s: [90.507, 62.427, 0] },
//                   ],
//                   ix: 2,
//                 },
//                 a: { a: 0, k: [0.007, -12.073, 0], ix: 1 },
//                 s: { a: 0, k: [100, 100, 100], ix: 6 },
//               },
//               ao: 0,
//               t: {
//                 d: {
//                   k: [
//                     {
//                       s: {
//                         s: 36,
//                         f: "ProximaNova-Bold",
//                         t: "80",
//                         j: 2,
//                         tr: 0,
//                         lh: 43.2,
//                         ls: 0,
//                         fc: [1, 1, 1],
//                       },
//                       t: 0,
//                     },
//                   ],
//                 },
//                 p: {},
//                 m: { g: 1, a: { a: 0, k: [0, 0], ix: 2 } },
//                 a: [],
//               },
//               ip: 0,
//               op: 1000,
//               st: 0,
//               bm: 0,
//             },
//             {
//               ddd: 0,
//               ind: 4,
//               ty: 4,
//               nm: "100 Outlines",
//               sr: 1,
//               ks: {
//                 o: {
//                   a: 1,
//                   k: [
//                     {
//                       i: { x: [0.667], y: [1] },
//                       o: { x: [0.333], y: [0] },
//                       t: 17,
//                       s: [0],
//                     },
//                     { t: 21, s: [100] },
//                   ],
//                   ix: 11,
//                 },
//                 r: { a: 0, k: 0, ix: 10 },
//                 p: {
//                   a: 1,
//                   k: [
//                     {
//                       i: { x: 0.667, y: 1 },
//                       o: { x: 0.333, y: 0 },
//                       t: 17,
//                       s: [90.632, 112.894, 0],
//                       to: [0, -4.167, 0],
//                       ti: [0, 4.167, 0],
//                     },
//                     {
//                       i: { x: 0.667, y: 0.667 },
//                       o: { x: 0.333, y: 0.333 },
//                       t: 21,
//                       s: [90.632, 87.894, 0],
//                       to: [0, 0, 0],
//                       ti: [0, 0, 0],
//                     },
//                     {
//                       i: { x: 0.667, y: 1 },
//                       o: { x: 0.333, y: 0 },
//                       t: 27,
//                       s: [90.632, 87.894, 0],
//                       to: [-0.333, 0, 0],
//                       ti: [0, 0, 0],
//                     },
//                     {
//                       i: { x: 0.667, y: 1 },
//                       o: { x: 0.333, y: 0 },
//                       t: 31,
//                       s: [88.632, 87.894, 0],
//                       to: [0, 0, 0],
//                       ti: [0, 0, 0],
//                     },
//                     {
//                       i: { x: 0.667, y: 1 },
//                       o: { x: 0.333, y: 0 },
//                       t: 35,
//                       s: [90.632, 87.894, 0],
//                       to: [0, 0, 0],
//                       ti: [0, 0, 0],
//                     },
//                     {
//                       i: { x: 0.667, y: 1 },
//                       o: { x: 0.333, y: 0 },
//                       t: 39,
//                       s: [88.632, 87.894, 0],
//                       to: [0, 0, 0],
//                       ti: [0, 0, 0],
//                     },
//                     {
//                       i: { x: 0.667, y: 1 },
//                       o: { x: 0.167, y: 0 },
//                       t: 43,
//                       s: [90.632, 87.894, 0],
//                       to: [0, 0, 0],
//                       ti: [0, 0, 0],
//                     },
//                     {
//                       i: { x: 0.667, y: 1 },
//                       o: { x: 0.333, y: 0 },
//                       t: 47,
//                       s: [88.632, 87.894, 0],
//                       to: [0, 0, 0],
//                       ti: [-0.333, 0, 0],
//                     },
//                     { t: 51, s: [90.632, 87.894, 0] },
//                   ],
//                   ix: 2,
//                 },
//                 a: { a: 0, k: [0.007, -12.073, 0], ix: 1 },
//                 s: {
//                   a: 1,
//                   k: [
//                     {
//                       i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] },
//                       o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] },
//                       t: 27,
//                       s: [100, 100, 100],
//                     },
//                     {
//                       i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] },
//                       o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] },
//                       t: 31,
//                       s: [120, 120, 100],
//                     },
//                     {
//                       i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] },
//                       o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] },
//                       t: 35,
//                       s: [100, 100, 100],
//                     },
//                     {
//                       i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] },
//                       o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] },
//                       t: 39,
//                       s: [120, 120, 100],
//                     },
//                     {
//                       i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] },
//                       o: { x: [0.167, 0.167, 0.167], y: [0, 0, 0] },
//                       t: 43,
//                       s: [100, 100, 100],
//                     },
//                     {
//                       i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] },
//                       o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] },
//                       t: 47,
//                       s: [120, 120, 100],
//                     },
//                     { t: 51, s: [100, 100, 100] },
//                   ],
//                   ix: 6,
//                 },
//               },
//               ao: 0,
//               shapes: [
//                 {
//                   ty: "gr",
//                   it: [
//                     {
//                       ind: 0,
//                       ty: "sh",
//                       ix: 1,
//                       ks: {
//                         a: 0,
//                         k: {
//                           i: [
//                             [0, 0],
//                             [0, 0],
//                             [0, 0],
//                             [0, 0],
//                             [0, 0],
//                             [0, 0],
//                             [0, 0],
//                           ],
//                           o: [
//                             [0, 0],
//                             [0, 0],
//                             [0, 0],
//                             [0, 0],
//                             [0, 0],
//                             [0, 0],
//                             [0, 0],
//                           ],
//                           v: [
//                             [-17.21, 0],
//                             [-17.21, -24.182],
//                             [-21.705, -24.182],
//                             [-29.319, -16.532],
//                             [-26.382, -13.451],
//                             [-22.358, -17.547],
//                             [-22.358, 0],
//                           ],
//                           c: true,
//                         },
//                         ix: 2,
//                       },
//                       nm: "1",
//                       mn: "ADBE Vector Shape - Group",
//                       hd: false,
//                     },
//                     {
//                       ty: "fl",
//                       c: {
//                         a: 1,
//                         k: [
//                           {
//                             i: { x: [0.667], y: [1] },
//                             o: { x: [0.333], y: [0] },
//                             t: 21,
//                             s: [1, 1, 1, 1],
//                           },
//                           {
//                             t: 27,
//                             s: [
//                               0.929411828518, 0.184313729405, 0.40784317255, 1,
//                             ],
//                           },
//                         ],
//                         ix: 4,
//                       },
//                       o: { a: 0, k: 100, ix: 5 },
//                       r: 1,
//                       bm: 0,
//                       nm: "Fill 1",
//                       mn: "ADBE Vector Graphic - Fill",
//                       hd: false,
//                     },
//                     {
//                       ty: "tr",
//                       p: { a: 0, k: [0, 0], ix: 2 },
//                       a: { a: 0, k: [0, 0], ix: 1 },
//                       s: { a: 0, k: [100, 100], ix: 3 },
//                       r: { a: 0, k: 0, ix: 6 },
//                       o: { a: 0, k: 100, ix: 7 },
//                       sk: { a: 0, k: 0, ix: 4 },
//                       sa: { a: 0, k: 0, ix: 5 },
//                       nm: "Transform",
//                     },
//                   ],
//                   nm: "1",
//                   np: 3,
//                   cix: 2,
//                   bm: 0,
//                   ix: 1,
//                   mn: "ADBE Vector Group",
//                   hd: false,
//                 },
//                 {
//                   ty: "gr",
//                   it: [
//                     {
//                       ind: 0,
//                       ty: "sh",
//                       ix: 1,
//                       ks: {
//                         a: 0,
//                         k: {
//                           i: [
//                             [-6.925, 0],
//                             [0, 6.236],
//                             [6.888, 0],
//                             [0, -6.236],
//                           ],
//                           o: [
//                             [6.888, 0],
//                             [0, -6.236],
//                             [-6.925, 0],
//                             [0, 6.236],
//                           ],
//                           v: [
//                             [-3.683, 0.435],
//                             [6.324, -12.073],
//                             [-3.683, -24.545],
//                             [-13.689, -12.073],
//                           ],
//                           c: true,
//                         },
//                         ix: 2,
//                       },
//                       nm: "0",
//                       mn: "ADBE Vector Shape - Group",
//                       hd: false,
//                     },
//                     {
//                       ind: 1,
//                       ty: "sh",
//                       ix: 2,
//                       ks: {
//                         a: 0,
//                         k: {
//                           i: [
//                             [3.444, 0],
//                             [0, 4.459],
//                             [-3.48, 0],
//                             [0, -4.459],
//                           ],
//                           o: [
//                             [-3.48, 0],
//                             [0, -4.459],
//                             [3.444, 0],
//                             [0, 4.459],
//                           ],
//                           v: [
//                             [-3.683, -4.133],
//                             [-8.468, -12.073],
//                             [-3.683, -19.976],
//                             [1.067, -12.073],
//                           ],
//                           c: true,
//                         },
//                         ix: 2,
//                       },
//                       nm: "0",
//                       mn: "ADBE Vector Shape - Group",
//                       hd: false,
//                     },
//                     {
//                       ty: "mm",
//                       mm: 1,
//                       nm: "Merge Paths 1",
//                       mn: "ADBE Vector Filter - Merge",
//                       hd: false,
//                     },
//                     {
//                       ty: "fl",
//                       c: {
//                         a: 1,
//                         k: [
//                           {
//                             i: { x: [0.667], y: [1] },
//                             o: { x: [0.333], y: [0] },
//                             t: 21,
//                             s: [1, 1, 1, 1],
//                           },
//                           {
//                             t: 27,
//                             s: [
//                               0.929411828518, 0.184313729405, 0.40784317255, 1,
//                             ],
//                           },
//                         ],
//                         ix: 4,
//                       },
//                       o: { a: 0, k: 100, ix: 5 },
//                       r: 1,
//                       bm: 0,
//                       nm: "Fill 1",
//                       mn: "ADBE Vector Graphic - Fill",
//                       hd: false,
//                     },
//                     {
//                       ty: "tr",
//                       p: { a: 0, k: [0, 0], ix: 2 },
//                       a: { a: 0, k: [0, 0], ix: 1 },
//                       s: { a: 0, k: [100, 100], ix: 3 },
//                       r: { a: 0, k: 0, ix: 6 },
//                       o: { a: 0, k: 100, ix: 7 },
//                       sk: { a: 0, k: 0, ix: 4 },
//                       sa: { a: 0, k: 0, ix: 5 },
//                       nm: "Transform",
//                     },
//                   ],
//                   nm: "0",
//                   np: 5,
//                   cix: 2,
//                   bm: 0,
//                   ix: 2,
//                   mn: "ADBE Vector Group",
//                   hd: false,
//                 },
//                 {
//                   ty: "gr",
//                   it: [
//                     {
//                       ind: 0,
//                       ty: "sh",
//                       ix: 1,
//                       ks: {
//                         a: 0,
//                         k: {
//                           i: [
//                             [-6.925, 0],
//                             [0, 6.236],
//                             [6.888, 0],
//                             [0, -6.236],
//                           ],
//                           o: [
//                             [6.888, 0],
//                             [0, -6.236],
//                             [-6.925, 0],
//                             [0, 6.236],
//                           ],
//                           v: [
//                             [18.637, 0.435],
//                             [28.643, -12.073],
//                             [18.637, -24.545],
//                             [8.631, -12.073],
//                           ],
//                           c: true,
//                         },
//                         ix: 2,
//                       },
//                       nm: "0",
//                       mn: "ADBE Vector Shape - Group",
//                       hd: false,
//                     },
//                     {
//                       ind: 1,
//                       ty: "sh",
//                       ix: 2,
//                       ks: {
//                         a: 0,
//                         k: {
//                           i: [
//                             [3.444, 0],
//                             [0, 4.459],
//                             [-3.48, 0],
//                             [0, -4.459],
//                           ],
//                           o: [
//                             [-3.48, 0],
//                             [0, -4.459],
//                             [3.444, 0],
//                             [0, 4.459],
//                           ],
//                           v: [
//                             [18.637, -4.133],
//                             [13.852, -12.073],
//                             [18.637, -19.976],
//                             [23.387, -12.073],
//                           ],
//                           c: true,
//                         },
//                         ix: 2,
//                       },
//                       nm: "0",
//                       mn: "ADBE Vector Shape - Group",
//                       hd: false,
//                     },
//                     {
//                       ty: "mm",
//                       mm: 1,
//                       nm: "Merge Paths 1",
//                       mn: "ADBE Vector Filter - Merge",
//                       hd: false,
//                     },
//                     {
//                       ty: "fl",
//                       c: {
//                         a: 1,
//                         k: [
//                           {
//                             i: { x: [0.667], y: [1] },
//                             o: { x: [0.333], y: [0] },
//                             t: 21,
//                             s: [1, 1, 1, 1],
//                           },
//                           {
//                             t: 27,
//                             s: [
//                               0.929411828518, 0.184313729405, 0.40784317255, 1,
//                             ],
//                           },
//                         ],
//                         ix: 4,
//                       },
//                       o: { a: 0, k: 100, ix: 5 },
//                       r: 1,
//                       bm: 0,
//                       nm: "Fill 1",
//                       mn: "ADBE Vector Graphic - Fill",
//                       hd: false,
//                     },
//                     {
//                       ty: "tr",
//                       p: { a: 0, k: [0, 0], ix: 2 },
//                       a: { a: 0, k: [0, 0], ix: 1 },
//                       s: { a: 0, k: [100, 100], ix: 3 },
//                       r: { a: 0, k: 0, ix: 6 },
//                       o: { a: 0, k: 100, ix: 7 },
//                       sk: { a: 0, k: 0, ix: 4 },
//                       sa: { a: 0, k: 0, ix: 5 },
//                       nm: "Transform",
//                     },
//                   ],
//                   nm: "0",
//                   np: 5,
//                   cix: 2,
//                   bm: 0,
//                   ix: 3,
//                   mn: "ADBE Vector Group",
//                   hd: false,
//                 },
//               ],
//               ip: 5,
//               op: 1005,
//               st: 5,
//               bm: 0,
//             },
//             {
//               ddd: 0,
//               ind: 5,
//               ty: 5,
//               nm: "90",
//               sr: 1,
//               ks: {
//                 o: {
//                   a: 1,
//                   k: [
//                     {
//                       i: { x: [0.667], y: [1] },
//                       o: { x: [0.333], y: [0] },
//                       t: 8.32,
//                       s: [0],
//                     },
//                     {
//                       i: { x: [0.667], y: [1] },
//                       o: { x: [0.167], y: [0] },
//                       t: 13,
//                       s: [100],
//                     },
//                     {
//                       i: { x: [0.667], y: [1] },
//                       o: { x: [0.167], y: [0] },
//                       t: 17,
//                       s: [100],
//                     },
//                     { t: 21.16015625, s: [0] },
//                   ],
//                   ix: 11,
//                 },
//                 r: { a: 0, k: 0, ix: 10 },
//                 p: {
//                   a: 1,
//                   k: [
//                     {
//                       i: { x: 0.667, y: 1 },
//                       o: { x: 0.333, y: 0 },
//                       t: 0,
//                       s: [90.507, 117.427, 0],
//                       to: [0, -4.833, 0],
//                       ti: [0, 4.833, 0],
//                     },
//                     {
//                       i: { x: 0.667, y: 0.667 },
//                       o: { x: 0.167, y: 0.167 },
//                       t: 13,
//                       s: [90.507, 88.427, 0],
//                       to: [0, 0, 0],
//                       ti: [0, 0, 0],
//                     },
//                     {
//                       i: { x: 0.667, y: 1 },
//                       o: { x: 0.167, y: 0 },
//                       t: 17,
//                       s: [90.507, 88.427, 0],
//                       to: [0, -4.333, 0],
//                       ti: [0, 4.333, 0],
//                     },
//                     { t: 26.8798828125, s: [90.507, 62.427, 0] },
//                   ],
//                   ix: 2,
//                 },
//                 a: { a: 0, k: [0.007, -12.073, 0], ix: 1 },
//                 s: { a: 0, k: [100, 100, 100], ix: 6 },
//               },
//               ao: 0,
//               t: {
//                 d: {
//                   k: [
//                     {
//                       s: {
//                         s: 36,
//                         f: "ProximaNova-Bold",
//                         t: "90",
//                         j: 2,
//                         tr: 0,
//                         lh: 43.2,
//                         ls: 0,
//                         fc: [1, 1, 1],
//                       },
//                       t: 0,
//                     },
//                   ],
//                 },
//                 p: {},
//                 m: { g: 1, a: { a: 0, k: [0, 0], ix: 2 } },
//                 a: [],
//               },
//               ip: 0,
//               op: 1000,
//               st: 0,
//               bm: 0,
//             },
//             {
//               ddd: 0,
//               ind: 6,
//               ty: 4,
//               nm: "Shape Layer 2",
//               sr: 1,
//               ks: {
//                 o: { a: 0, k: 100, ix: 11 },
//                 r: { a: 0, k: 0, ix: 10 },
//                 p: { a: 0, k: [100, 100, 0], ix: 2 },
//                 a: { a: 0, k: [0, 0, 0], ix: 1 },
//                 s: { a: 0, k: [100, 100, 100], ix: 6 },
//               },
//               ao: 0,
//               shapes: [
//                 {
//                   ty: "gr",
//                   it: [
//                     {
//                       ty: "rc",
//                       d: 1,
//                       s: { a: 0, k: [7, 15], ix: 2 },
//                       p: { a: 0, k: [0, -89], ix: 3 },
//                       r: { a: 0, k: 2, ix: 4 },
//                       nm: "Rectangle Path 1",
//                       mn: "ADBE Vector Shape - Rect",
//                       hd: false,
//                     },
//                     {
//                       ty: "fl",
//                       c: {
//                         a: 1,
//                         k: [
//                           {
//                             i: { x: [0.667], y: [1] },
//                             o: { x: [0.333], y: [0] },
//                             t: 0,
//                             s: [
//                               0.929411768913, 0.764705896378, 0.180392161012, 1,
//                             ],
//                           },
//                           {
//                             i: { x: [0.667], y: [1] },
//                             o: { x: [0.333], y: [0] },
//                             t: 25,
//                             s: [
//                               0.929411768913, 0.180392161012, 0.407843142748, 1,
//                             ],
//                           },
//                           {
//                             t: 77,
//                             s: [
//                               0.929411768913, 0.180392161012, 0.407843142748, 1,
//                             ],
//                           },
//                         ],
//                         ix: 4,
//                       },
//                       o: { a: 0, k: 100, ix: 5 },
//                       r: 1,
//                       bm: 0,
//                       nm: "Fill 1",
//                       mn: "ADBE Vector Graphic - Fill",
//                       hd: false,
//                     },
//                     {
//                       ty: "rp",
//                       c: {
//                         a: 1,
//                         k: [
//                           {
//                             i: { x: [0.667], y: [1] },
//                             o: { x: [0.333], y: [0] },
//                             t: 0,
//                             s: [28],
//                           },
//                           { t: 25, s: [36] },
//                         ],
//                         ix: 1,
//                       },
//                       o: { a: 0, k: 0, ix: 2 },
//                       m: 1,
//                       ix: 4,
//                       tr: {
//                         ty: "tr",
//                         p: { a: 0, k: [0, 0], ix: 2 },
//                         a: { a: 0, k: [0, 0], ix: 1 },
//                         s: { a: 0, k: [100, 100], ix: 3 },
//                         r: { a: 0, k: 10, ix: 4 },
//                         so: { a: 0, k: 100, ix: 5 },
//                         eo: { a: 0, k: 100, ix: 6 },
//                         nm: "Transform",
//                       },
//                       nm: "Repeater 1",
//                       mn: "ADBE Vector Filter - Repeater",
//                       hd: false,
//                     },
//                     {
//                       ty: "tr",
//                       p: { a: 0, k: [0, 0], ix: 2 },
//                       a: { a: 0, k: [0, 0], ix: 1 },
//                       s: { a: 0, k: [100, 100], ix: 3 },
//                       r: { a: 0, k: 0, ix: 6 },
//                       o: { a: 0, k: 100, ix: 7 },
//                       sk: { a: 0, k: 0, ix: 4 },
//                       sa: { a: 0, k: 0, ix: 5 },
//                       nm: "Transform",
//                     },
//                   ],
//                   nm: "Rectangle 1",
//                   np: 4,
//                   cix: 2,
//                   bm: 0,
//                   ix: 1,
//                   mn: "ADBE Vector Group",
//                   hd: false,
//                 },
//               ],
//               ip: 0,
//               op: 1000,
//               st: 0,
//               bm: 0,
//             },
//             {
//               ddd: 0,
//               ind: 7,
//               ty: 4,
//               nm: "Shape Layer 1",
//               sr: 1,
//               ks: {
//                 o: { a: 0, k: 100, ix: 11 },
//                 r: { a: 0, k: 0, ix: 10 },
//                 p: { a: 0, k: [100, 100, 0], ix: 2 },
//                 a: { a: 0, k: [8, -6, 0], ix: 1 },
//                 s: { a: 0, k: [100, 100, 100], ix: 6 },
//               },
//               ao: 0,
//               shapes: [
//                 {
//                   ty: "gr",
//                   it: [
//                     {
//                       d: 1,
//                       ty: "el",
//                       s: { a: 0, k: [152, 152], ix: 2 },
//                       p: { a: 0, k: [0, 0], ix: 3 },
//                       nm: "Ellipse Path 1",
//                       mn: "ADBE Vector Shape - Ellipse",
//                       hd: false,
//                     },
//                     {
//                       ty: "st",
//                       c: { a: 0, k: [1, 1, 1, 1], ix: 3 },
//                       o: { a: 0, k: 30, ix: 4 },
//                       w: { a: 0, k: 2, ix: 5 },
//                       lc: 1,
//                       lj: 1,
//                       ml: 4,
//                       bm: 0,
//                       nm: "Stroke 1",
//                       mn: "ADBE Vector Graphic - Stroke",
//                       hd: false,
//                     },
//                     {
//                       ty: "tr",
//                       p: { a: 0, k: [8, -6], ix: 2 },
//                       a: { a: 0, k: [0, 0], ix: 1 },
//                       s: { a: 0, k: [100, 100], ix: 3 },
//                       r: { a: 0, k: 0, ix: 6 },
//                       o: { a: 0, k: 100, ix: 7 },
//                       sk: { a: 0, k: 0, ix: 4 },
//                       sa: { a: 0, k: 0, ix: 5 },
//                       nm: "Transform",
//                     },
//                   ],
//                   nm: "Ellipse 1",
//                   np: 3,
//                   cix: 2,
//                   bm: 0,
//                   ix: 1,
//                   mn: "ADBE Vector Group",
//                   hd: false,
//                 },
//               ],
//               ip: 0,
//               op: 1000,
//               st: 0,
//               bm: 0,
//             },
//           ],
//           markers: [],
//           chars: [
//             {
//               ch: "9",
//               size: 36,
//               style: "Bold",
//               w: 60.8,
//               data: {
//                 shapes: [
//                   {
//                     ty: "gr",
//                     it: [
//                       {
//                         ind: 0,
//                         ty: "sh",
//                         ix: 1,
//                         ks: {
//                           a: 0,
//                           k: {
//                             i: [
//                               [-8.157, 0],
//                               [0, 20.242],
//                               [20.343, 0],
//                               [0, -13.092],
//                               [-12.085, 0],
//                               [-3.223, 4.532],
//                               [0, -0.504],
//                               [11.078, 0],
//                               [3.625, 3.424],
//                               [0, 0],
//                             ],
//                             o: [
//                               [19.839, 0],
//                               [0, -19.034],
//                               [-15.308, 0],
//                               [0, 14.301],
//                               [7.352, 0],
//                               [0, 0.504],
//                               [0, 9.668],
//                               [-5.942, 0],
//                               [0, 0],
//                               [4.733, 4.23],
//                             ],
//                             v: [
//                               [26.486, 1.108],
//                               [57.706, -33.536],
//                               [28.802, -68.28],
//                               [3.021, -45.218],
//                               [25.983, -23.364],
//                               [43.304, -32.025],
//                               [43.304, -30.515],
//                               [26.486, -11.581],
//                               [13.092, -16.818],
//                               [6.747, -5.841],
//                             ],
//                             c: true,
//                           },
//                           ix: 2,
//                         },
//                         nm: "9",
//                         mn: "ADBE Vector Shape - Group",
//                         hd: false,
//                       },
//                       {
//                         ind: 1,
//                         ty: "sh",
//                         ix: 2,
//                         ks: {
//                           a: 0,
//                           k: {
//                             i: [
//                               [5.035, 0],
//                               [0, 7.05],
//                               [-7.654, 0],
//                               [-0.604, -6.445],
//                             ],
//                             o: [
//                               [-6.244, 0],
//                               [0, -4.633],
//                               [9.467, 0],
//                               [-3.223, 3.928],
//                             ],
//                             v: [
//                               [30.011, -35.651],
//                               [17.624, -45.721],
//                               [29.507, -55.591],
//                               [43.204, -41.895],
//                             ],
//                             c: true,
//                           },
//                           ix: 2,
//                         },
//                         nm: "9",
//                         mn: "ADBE Vector Shape - Group",
//                         hd: false,
//                       },
//                     ],
//                     nm: "9",
//                     np: 5,
//                     cix: 2,
//                     bm: 0,
//                     ix: 1,
//                     mn: "ADBE Vector Group",
//                     hd: false,
//                   },
//                 ],
//               },
//               fFamily: "Proxima Nova",
//             },
//             {
//               ch: "0",
//               size: 36,
//               style: "Bold",
//               w: 62,
//               data: {
//                 shapes: [
//                   {
//                     ty: "gr",
//                     it: [
//                       {
//                         ind: 0,
//                         ty: "sh",
//                         ix: 1,
//                         ks: {
//                           a: 0,
//                           k: {
//                             i: [
//                               [-19.235, 0],
//                               [0, 17.322],
//                               [19.135, 0],
//                               [0, -17.322],
//                             ],
//                             o: [
//                               [19.135, 0],
//                               [0, -17.322],
//                               [-19.235, 0],
//                               [0, 17.322],
//                             ],
//                             v: [
//                               [31.219, 1.208],
//                               [59.015, -33.536],
//                               [31.219, -68.179],
//                               [3.424, -33.536],
//                             ],
//                             c: true,
//                           },
//                           ix: 2,
//                         },
//                         nm: "0",
//                         mn: "ADBE Vector Shape - Group",
//                         hd: false,
//                       },
//                       {
//                         ind: 1,
//                         ty: "sh",
//                         ix: 2,
//                         ks: {
//                           a: 0,
//                           k: {
//                             i: [
//                               [9.567, 0],
//                               [0, 12.387],
//                               [-9.668, 0],
//                               [0, -12.387],
//                             ],
//                             o: [
//                               [-9.668, 0],
//                               [0, -12.387],
//                               [9.567, 0],
//                               [0, 12.387],
//                             ],
//                             v: [
//                               [31.219, -11.481],
//                               [17.926, -33.536],
//                               [31.219, -55.49],
//                               [44.412, -33.536],
//                             ],
//                             c: true,
//                           },
//                           ix: 2,
//                         },
//                         nm: "0",
//                         mn: "ADBE Vector Shape - Group",
//                         hd: false,
//                       },
//                     ],
//                     nm: "0",
//                     np: 5,
//                     cix: 2,
//                     bm: 0,
//                     ix: 1,
//                     mn: "ADBE Vector Group",
//                     hd: false,
//                   },
//                 ],
//               },
//               fFamily: "Proxima Nova",
//             },
//             {
//               ch: "8",
//               size: 36,
//               style: "Bold",
//               w: 60.6,
//               data: {
//                 shapes: [
//                   {
//                     ty: "gr",
//                     it: [
//                       {
//                         ind: 0,
//                         ty: "sh",
//                         ix: 1,
//                         ks: {
//                           a: 0,
//                           k: {
//                             i: [
//                               [-14.099, 0],
//                               [0, 12.488],
//                               [8.057, 2.82],
//                               [0, 8.359],
//                               [12.387, 0],
//                               [0, -12.589],
//                               [-7.452, -2.618],
//                               [0, -8.157],
//                             ],
//                             o: [
//                               [14.099, 0],
//                               [0, -8.157],
//                               [7.452, -2.618],
//                               [0, -12.589],
//                               [-12.488, 0],
//                               [0, 8.359],
//                               [-8.057, 2.82],
//                               [0, 12.589],
//                             ],
//                             v: [
//                               [30.515, 1.208],
//                               [57.504, -17.422],
//                               [43.002, -34.644],
//                               [56.396, -50.455],
//                               [30.515, -68.179],
//                               [4.633, -50.455],
//                               [17.926, -34.644],
//                               [3.525, -17.422],
//                             ],
//                             c: true,
//                           },
//                           ix: 2,
//                         },
//                         nm: "8",
//                         mn: "ADBE Vector Shape - Group",
//                         hd: false,
//                       },
//                       {
//                         ind: 1,
//                         ty: "sh",
//                         ix: 2,
//                         ks: {
//                           a: 0,
//                           k: {
//                             i: [
//                               [4.129, -0.604],
//                               [0, 5.035],
//                               [-6.647, 0],
//                               [0, -4.834],
//                             ],
//                             o: [
//                               [-4.129, -0.604],
//                               [0, -4.834],
//                               [6.546, 0],
//                               [0, 5.035],
//                             ],
//                             v: [
//                               [30.515, -40.283],
//                               [19.135, -48.239],
//                               [30.515, -55.893],
//                               [41.794, -48.239],
//                             ],
//                             c: true,
//                           },
//                           ix: 2,
//                         },
//                         nm: "8",
//                         mn: "ADBE Vector Shape - Group",
//                         hd: false,
//                       },
//                       {
//                         ind: 2,
//                         ty: "sh",
//                         ix: 3,
//                         ks: {
//                           a: 0,
//                           k: {
//                             i: [
//                               [6.848, 0],
//                               [0, 4.935],
//                               [-4.23, 0.604],
//                               [0, -5.64],
//                             ],
//                             o: [
//                               [-7.05, 0],
//                               [0, -5.64],
//                               [4.129, 0.604],
//                               [0, 4.935],
//                             ],
//                             v: [
//                               [30.515, -11.078],
//                               [18.027, -19.235],
//                               [30.515, -28.198],
//                               [43.002, -19.235],
//                             ],
//                             c: true,
//                           },
//                           ix: 2,
//                         },
//                         nm: "8",
//                         mn: "ADBE Vector Shape - Group",
//                         hd: false,
//                       },
//                     ],
//                     nm: "8",
//                     np: 6,
//                     cix: 2,
//                     bm: 0,
//                     ix: 1,
//                     mn: "ADBE Vector Group",
//                     hd: false,
//                   },
//                 ],
//               },
//               fFamily: "Proxima Nova",
//             },
//             {
//               ch: " ",
//               size: 14,
//               style: "Regular",
//               w: 25.8,
//               data: {},
//               fFamily: "Proxima Nova",
//             },
//             {
//               ch: "b",
//               size: 14,
//               style: "Regular",
//               w: 57.5,
//               data: {
//                 shapes: [
//                   {
//                     ty: "gr",
//                     it: [
//                       {
//                         ind: 0,
//                         ty: "sh",
//                         ix: 1,
//                         ks: {
//                           a: 0,
//                           k: {
//                             i: [
//                               [2.618, 4.23],
//                               [0, 0],
//                               [-5.942, 0],
//                               [0, -10.776],
//                               [9.869, 0],
//                             ],
//                             o: [
//                               [0, 0],
//                               [2.618, -4.23],
//                               [9.869, 0],
//                               [0, 10.776],
//                               [-5.942, 0],
//                             ],
//                             v: [
//                               [15.106, -13.193],
//                               [15.106, -35.248],
//                               [29.608, -43.103],
//                               [45.319, -24.271],
//                               [29.608, -5.539],
//                             ],
//                             c: true,
//                           },
//                           ix: 2,
//                         },
//                         nm: "b",
//                         mn: "ADBE Vector Shape - Group",
//                         hd: false,
//                       },
//                       {
//                         ind: 1,
//                         ty: "sh",
//                         ix: 2,
//                         ks: {
//                           a: 0,
//                           k: {
//                             i: [
//                               [0, 0],
//                               [0, 0],
//                               [-6.848, 0],
//                               [0, 15.811],
//                               [12.689, 0],
//                               [3.928, -5.338],
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                             ],
//                             o: [
//                               [0, 0],
//                               [3.625, 4.935],
//                               [12.689, 0],
//                               [0, -15.509],
//                               [-6.647, 0],
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                             ],
//                             v: [
//                               [15.106, 0],
//                               [15.106, -7.251],
//                               [31.522, 1.208],
//                               [53.174, -24.271],
//                               [31.522, -49.85],
//                               [15.106, -41.29],
//                               [15.106, -67.172],
//                               [7.553, -67.172],
//                               [7.553, 0],
//                             ],
//                             c: true,
//                           },
//                           ix: 2,
//                         },
//                         nm: "b",
//                         mn: "ADBE Vector Shape - Group",
//                         hd: false,
//                       },
//                     ],
//                     nm: "b",
//                     np: 5,
//                     cix: 2,
//                     bm: 0,
//                     ix: 1,
//                     mn: "ADBE Vector Group",
//                     hd: false,
//                   },
//                 ],
//               },
//               fFamily: "Proxima Nova",
//             },
//             {
//               ch: "a",
//               size: 14,
//               style: "Regular",
//               w: 52.7,
//               data: {
//                 shapes: [
//                   {
//                     ty: "gr",
//                     it: [
//                       {
//                         ind: 0,
//                         ty: "sh",
//                         ix: 1,
//                         ks: {
//                           a: 0,
//                           k: {
//                             i: [
//                               [0, 0],
//                               [0, 0],
//                               [10.272, 0],
//                               [5.237, -5.438],
//                               [0, 0],
//                               [-5.841, 0],
//                               [0, -6.546],
//                               [0, 0],
//                               [6.647, 0],
//                               [0, -10.876],
//                               [-8.258, 0],
//                               [-4.028, 4.431],
//                               [0, 0],
//                             ],
//                             o: [
//                               [0, 0],
//                               [0, -11.783],
//                               [-7.956, 0],
//                               [0, 0],
//                               [4.33, -4.633],
//                               [7.05, 0],
//                               [0, 0],
//                               [-3.928, -4.532],
//                               [-8.258, 0],
//                               [0, 10.574],
//                               [6.546, 0],
//                               [0, 0],
//                               [0, 0],
//                             ],
//                             v: [
//                               [45.52, 0],
//                               [45.52, -33.435],
//                               [26.688, -49.85],
//                               [7.251, -41.794],
//                               [10.776, -36.557],
//                               [25.681, -43.304],
//                               [37.967, -33.032],
//                               [37.967, -24.271],
//                               [21.854, -30.917],
//                               [4.834, -14.905],
//                               [21.854, 1.208],
//                               [37.967, -5.539],
//                               [37.967, 0],
//                             ],
//                             c: true,
//                           },
//                           ix: 2,
//                         },
//                         nm: "a",
//                         mn: "ADBE Vector Shape - Group",
//                         hd: false,
//                       },
//                       {
//                         ind: 1,
//                         ty: "sh",
//                         ix: 2,
//                         ks: {
//                           a: 0,
//                           k: {
//                             i: [
//                               [5.338, 0],
//                               [0, 6.143],
//                               [-7.05, 0],
//                               [-2.921, -4.028],
//                               [0, 0],
//                             ],
//                             o: [
//                               [-7.05, 0],
//                               [0, -6.244],
//                               [5.338, 0],
//                               [0, 0],
//                               [-2.921, 4.028],
//                             ],
//                             v: [
//                               [24.573, -4.23],
//                               [12.589, -14.804],
//                               [24.573, -25.479],
//                               [37.967, -19.437],
//                               [37.967, -10.272],
//                             ],
//                             c: true,
//                           },
//                           ix: 2,
//                         },
//                         nm: "a",
//                         mn: "ADBE Vector Shape - Group",
//                         hd: false,
//                       },
//                     ],
//                     nm: "a",
//                     np: 5,
//                     cix: 2,
//                     bm: 0,
//                     ix: 1,
//                     mn: "ADBE Vector Group",
//                     hd: false,
//                   },
//                 ],
//               },
//               fFamily: "Proxima Nova",
//             },
//             {
//               ch: "n",
//               size: 14,
//               style: "Regular",
//               w: 55.1,
//               data: {
//                 shapes: [
//                   {
//                     ty: "gr",
//                     it: [
//                       {
//                         ind: 0,
//                         ty: "sh",
//                         ix: 1,
//                         ks: {
//                           a: 0,
//                           k: {
//                             i: [
//                               [0, 0],
//                               [0, 0],
//                               [10.172, 0],
//                               [3.424, -4.028],
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                               [-5.942, 0],
//                               [0, -8.56],
//                               [0, 0],
//                             ],
//                             o: [
//                               [0, 0],
//                               [0, -10.574],
//                               [-7.251, 0],
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                               [2.82, -3.928],
//                               [6.546, 0],
//                               [0, 0],
//                               [0, 0],
//                             ],
//                             v: [
//                               [47.937, 0],
//                               [47.937, -34.14],
//                               [32.428, -49.85],
//                               [15.106, -41.592],
//                               [15.106, -48.642],
//                               [7.553, -48.642],
//                               [7.553, 0],
//                               [15.106, 0],
//                               [15.106, -35.55],
//                               [29.507, -43.103],
//                               [40.384, -31.824],
//                               [40.384, 0],
//                             ],
//                             c: true,
//                           },
//                           ix: 2,
//                         },
//                         nm: "n",
//                         mn: "ADBE Vector Shape - Group",
//                         hd: false,
//                       },
//                     ],
//                     nm: "n",
//                     np: 3,
//                     cix: 2,
//                     bm: 0,
//                     ix: 1,
//                     mn: "ADBE Vector Group",
//                     hd: false,
//                   },
//                 ],
//               },
//               fFamily: "Proxima Nova",
//             },
//             {
//               ch: "d",
//               size: 14,
//               style: "Regular",
//               w: 57.5,
//               data: {
//                 shapes: [
//                   {
//                     ty: "gr",
//                     it: [
//                       {
//                         ind: 0,
//                         ty: "sh",
//                         ix: 1,
//                         ks: {
//                           a: 0,
//                           k: {
//                             i: [
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                               [6.546, 0],
//                               [0, -15.509],
//                               [-12.689, 0],
//                               [-3.625, 4.935],
//                               [0, 0],
//                             ],
//                             o: [
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                               [-3.928, -5.338],
//                               [-12.79, 0],
//                               [0, 15.811],
//                               [6.848, 0],
//                               [0, 0],
//                               [0, 0],
//                             ],
//                             v: [
//                               [50.354, 0],
//                               [50.354, -67.172],
//                               [42.801, -67.172],
//                               [42.801, -41.29],
//                               [26.385, -49.85],
//                               [4.733, -24.271],
//                               [26.385, 1.208],
//                               [42.801, -7.251],
//                               [42.801, 0],
//                             ],
//                             c: true,
//                           },
//                           ix: 2,
//                         },
//                         nm: "d",
//                         mn: "ADBE Vector Shape - Group",
//                         hd: false,
//                       },
//                       {
//                         ind: 1,
//                         ty: "sh",
//                         ix: 2,
//                         ks: {
//                           a: 0,
//                           k: {
//                             i: [
//                               [6.042, 0],
//                               [0, 10.776],
//                               [-9.769, 0],
//                               [-2.719, -4.23],
//                               [0, 0],
//                             ],
//                             o: [
//                               [-9.769, 0],
//                               [0, -10.776],
//                               [6.042, 0],
//                               [0, 0],
//                               [-2.719, 4.23],
//                             ],
//                             v: [
//                               [28.198, -5.539],
//                               [12.589, -24.271],
//                               [28.198, -43.103],
//                               [42.801, -35.248],
//                               [42.801, -13.193],
//                             ],
//                             c: true,
//                           },
//                           ix: 2,
//                         },
//                         nm: "d",
//                         mn: "ADBE Vector Shape - Group",
//                         hd: false,
//                       },
//                     ],
//                     nm: "d",
//                     np: 5,
//                     cix: 2,
//                     bm: 0,
//                     ix: 1,
//                     mn: "ADBE Vector Group",
//                     hd: false,
//                   },
//                 ],
//               },
//               fFamily: "Proxima Nova",
//             },
//             {
//               ch: "w",
//               size: 14,
//               style: "Regular",
//               w: 73.4,
//               data: {
//                 shapes: [
//                   {
//                     ty: "gr",
//                     it: [
//                       {
//                         ind: 0,
//                         ty: "sh",
//                         ix: 1,
//                         ks: {
//                           a: 0,
//                           k: {
//                             i: [
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                             ],
//                             o: [
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                             ],
//                             v: [
//                               [57.202, 0],
//                               [72.711, -48.642],
//                               [64.856, -48.642],
//                               [52.972, -9.869],
//                               [40.182, -48.642],
//                               [33.737, -48.642],
//                               [20.947, -9.869],
//                               [9.064, -48.642],
//                               [1.208, -48.642],
//                               [16.718, 0],
//                               [24.271, 0],
//                               [36.96, -39.075],
//                               [49.649, 0],
//                             ],
//                             c: true,
//                           },
//                           ix: 2,
//                         },
//                         nm: "w",
//                         mn: "ADBE Vector Shape - Group",
//                         hd: false,
//                       },
//                     ],
//                     nm: "w",
//                     np: 3,
//                     cix: 2,
//                     bm: 0,
//                     ix: 1,
//                     mn: "ADBE Vector Group",
//                     hd: false,
//                   },
//                 ],
//               },
//               fFamily: "Proxima Nova",
//             },
//             {
//               ch: "i",
//               size: 14,
//               style: "Regular",
//               w: 22.5,
//               data: {
//                 shapes: [
//                   {
//                     ty: "gr",
//                     it: [
//                       {
//                         ind: 0,
//                         ty: "sh",
//                         ix: 1,
//                         ks: {
//                           a: 0,
//                           k: {
//                             i: [
//                               [-2.719, 0],
//                               [0, 2.82],
//                               [2.82, 0],
//                               [0, -2.82],
//                             ],
//                             o: [
//                               [2.82, 0],
//                               [0, -2.82],
//                               [-2.719, 0],
//                               [0, 2.82],
//                             ],
//                             v: [
//                               [11.279, -55.591],
//                               [16.415, -60.626],
//                               [11.279, -65.762],
//                               [6.244, -60.626],
//                             ],
//                             c: true,
//                           },
//                           ix: 2,
//                         },
//                         nm: "i",
//                         mn: "ADBE Vector Shape - Group",
//                         hd: false,
//                       },
//                       {
//                         ind: 1,
//                         ty: "sh",
//                         ix: 2,
//                         ks: {
//                           a: 0,
//                           k: {
//                             i: [
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                             ],
//                             o: [
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                             ],
//                             v: [
//                               [15.106, 0],
//                               [15.106, -48.642],
//                               [7.553, -48.642],
//                               [7.553, 0],
//                             ],
//                             c: true,
//                           },
//                           ix: 2,
//                         },
//                         nm: "i",
//                         mn: "ADBE Vector Shape - Group",
//                         hd: false,
//                       },
//                     ],
//                     nm: "i",
//                     np: 5,
//                     cix: 2,
//                     bm: 0,
//                     ix: 1,
//                     mn: "ADBE Vector Group",
//                     hd: false,
//                   },
//                 ],
//               },
//               fFamily: "Proxima Nova",
//             },
//             {
//               ch: "t",
//               size: 14,
//               style: "Regular",
//               w: 29.4,
//               data: {
//                 shapes: [
//                   {
//                     ty: "gr",
//                     it: [
//                       {
//                         ind: 0,
//                         ty: "sh",
//                         ix: 1,
//                         ks: {
//                           a: 0,
//                           k: {
//                             i: [
//                               [-7.15, 0],
//                               [-1.913, 1.813],
//                               [0, 0],
//                               [2.115, 0],
//                               [0, 3.625],
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                             ],
//                             o: [
//                               [4.431, 0],
//                               [0, 0],
//                               [-1.007, 1.108],
//                               [-3.323, 0],
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                               [0, 7.251],
//                             ],
//                             v: [
//                               [19.839, 1.208],
//                               [28.903, -1.913],
//                               [26.688, -7.553],
//                               [21.552, -5.539],
//                               [16.617, -11.783],
//                               [16.617, -41.995],
//                               [26.486, -41.995],
//                               [26.486, -48.642],
//                               [16.617, -48.642],
//                               [16.617, -61.935],
//                               [9.064, -61.935],
//                               [9.064, -48.642],
//                               [1.007, -48.642],
//                               [1.007, -41.995],
//                               [9.064, -41.995],
//                               [9.064, -10.172],
//                             ],
//                             c: true,
//                           },
//                           ix: 2,
//                         },
//                         nm: "t",
//                         mn: "ADBE Vector Shape - Group",
//                         hd: false,
//                       },
//                     ],
//                     nm: "t",
//                     np: 3,
//                     cix: 2,
//                     bm: 0,
//                     ix: 1,
//                     mn: "ADBE Vector Group",
//                     hd: false,
//                   },
//                 ],
//               },
//               fFamily: "Proxima Nova",
//             },
//             {
//               ch: "h",
//               size: 14,
//               style: "Regular",
//               w: 55.2,
//               data: {
//                 shapes: [
//                   {
//                     ty: "gr",
//                     it: [
//                       {
//                         ind: 0,
//                         ty: "sh",
//                         ix: 1,
//                         ks: {
//                           a: 0,
//                           k: {
//                             i: [
//                               [0, 0],
//                               [0, 0],
//                               [10.172, 0],
//                               [3.424, -4.028],
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                               [-5.841, 0],
//                               [0, -8.56],
//                               [0, 0],
//                             ],
//                             o: [
//                               [0, 0],
//                               [0, -10.574],
//                               [-7.352, 0],
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                               [2.921, -3.928],
//                               [6.546, 0],
//                               [0, 0],
//                               [0, 0],
//                             ],
//                             v: [
//                               [48.038, 0],
//                               [48.038, -34.341],
//                               [32.529, -49.85],
//                               [15.106, -41.592],
//                               [15.106, -67.172],
//                               [7.553, -67.172],
//                               [7.553, 0],
//                               [15.106, 0],
//                               [15.106, -35.55],
//                               [29.507, -43.103],
//                               [40.485, -32.025],
//                               [40.485, 0],
//                             ],
//                             c: true,
//                           },
//                           ix: 2,
//                         },
//                         nm: "h",
//                         mn: "ADBE Vector Shape - Group",
//                         hd: false,
//                       },
//                     ],
//                     nm: "h",
//                     np: 3,
//                     cix: 2,
//                     bm: 0,
//                     ix: 1,
//                     mn: "ADBE Vector Group",
//                     hd: false,
//                   },
//                 ],
//               },
//               fFamily: "Proxima Nova",
//             },
//             {
//               ch: "\r",
//               size: 14,
//               style: "Regular",
//               w: 0,
//               fFamily: "Proxima Nova",
//             },
//             {
//               ch: "o",
//               size: 14,
//               style: "Regular",
//               w: 57.2,
//               data: {
//                 shapes: [
//                   {
//                     ty: "gr",
//                     it: [
//                       {
//                         ind: 0,
//                         ty: "sh",
//                         ix: 1,
//                         ks: {
//                           a: 0,
//                           k: {
//                             i: [
//                               [-14.804, 0],
//                               [0, 14.099],
//                               [14.804, 0],
//                               [0, -14.099],
//                             ],
//                             o: [
//                               [14.804, 0],
//                               [0, -14.099],
//                               [-14.804, 0],
//                               [0, 14.099],
//                             ],
//                             v: [
//                               [28.802, 1.208],
//                               [52.872, -24.371],
//                               [28.802, -49.85],
//                               [4.733, -24.371],
//                             ],
//                             c: true,
//                           },
//                           ix: 2,
//                         },
//                         nm: "o",
//                         mn: "ADBE Vector Shape - Group",
//                         hd: false,
//                       },
//                       {
//                         ind: 1,
//                         ty: "sh",
//                         ix: 2,
//                         ks: {
//                           a: 0,
//                           k: {
//                             i: [
//                               [10.373, 0],
//                               [0, 9.97],
//                               [-10.373, 0],
//                               [0, -9.869],
//                             ],
//                             o: [
//                               [-10.373, 0],
//                               [0, -9.869],
//                               [10.373, 0],
//                               [0, 9.97],
//                             ],
//                             v: [
//                               [28.802, -5.539],
//                               [12.589, -24.371],
//                               [28.802, -43.103],
//                               [44.916, -24.371],
//                             ],
//                             c: true,
//                           },
//                           ix: 2,
//                         },
//                         nm: "o",
//                         mn: "ADBE Vector Shape - Group",
//                         hd: false,
//                       },
//                     ],
//                     nm: "o",
//                     np: 5,
//                     cix: 2,
//                     bm: 0,
//                     ix: 1,
//                     mn: "ADBE Vector Group",
//                     hd: false,
//                   },
//                 ],
//               },
//               fFamily: "Proxima Nova",
//             },
//             {
//               ch: "v",
//               size: 14,
//               style: "Regular",
//               w: 49,
//               data: {
//                 shapes: [
//                   {
//                     ty: "gr",
//                     it: [
//                       {
//                         ind: 0,
//                         ty: "sh",
//                         ix: 1,
//                         ks: {
//                           a: 0,
//                           k: {
//                             i: [
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                             ],
//                             o: [
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                             ],
//                             v: [
//                               [28.802, 0],
//                               [49.045, -48.642],
//                               [40.787, -48.642],
//                               [24.673, -8.762],
//                               [8.459, -48.642],
//                               [0.302, -48.642],
//                               [20.544, 0],
//                             ],
//                             c: true,
//                           },
//                           ix: 2,
//                         },
//                         nm: "v",
//                         mn: "ADBE Vector Shape - Group",
//                         hd: false,
//                       },
//                     ],
//                     nm: "v",
//                     np: 3,
//                     cix: 2,
//                     bm: 0,
//                     ix: 1,
//                     mn: "ADBE Vector Group",
//                     hd: false,
//                   },
//                 ],
//               },
//               fFamily: "Proxima Nova",
//             },
//             {
//               ch: "e",
//               size: 14,
//               style: "Regular",
//               w: 56.3,
//               data: {
//                 shapes: [
//                   {
//                     ty: "gr",
//                     it: [
//                       {
//                         ind: 0,
//                         ty: "sh",
//                         ix: 1,
//                         ks: {
//                           a: 0,
//                           k: {
//                             i: [
//                               [-14.401, 0],
//                               [-4.834, 4.834],
//                               [0, 0],
//                               [5.539, 0],
//                               [0.604, 9.164],
//                               [0, 0],
//                               [0, 0],
//                               [14.703, 0],
//                               [0, -14.099],
//                             ],
//                             o: [
//                               [7.956, 0],
//                               [0, 0],
//                               [-3.827, 3.928],
//                               [-10.474, 0],
//                               [0, 0],
//                               [0, 0],
//                               [0, -14.603],
//                               [-13.898, 0],
//                               [0, 15.207],
//                             ],
//                             v: [
//                               [29.507, 1.208],
//                               [48.843, -6.244],
//                               [45.218, -11.179],
//                               [30.212, -5.035],
//                               [12.689, -21.854],
//                               [52.066, -21.854],
//                               [52.066, -23.767],
//                               [28.702, -49.85],
//                               [4.733, -24.371],
//                             ],
//                             c: true,
//                           },
//                           ix: 2,
//                         },
//                         nm: "e",
//                         mn: "ADBE Vector Shape - Group",
//                         hd: false,
//                       },
//                       {
//                         ind: 1,
//                         ty: "sh",
//                         ix: 2,
//                         ks: {
//                           a: 0,
//                           k: {
//                             i: [
//                               [-0.101, -7.251],
//                               [0, 0],
//                               [-10.373, 0],
//                             ],
//                             o: [
//                               [0, 0],
//                               [0.403, -7.452],
//                               [11.078, 0],
//                             ],
//                             v: [
//                               [44.614, -27.393],
//                               [12.689, -27.393],
//                               [28.601, -43.607],
//                             ],
//                             c: true,
//                           },
//                           ix: 2,
//                         },
//                         nm: "e",
//                         mn: "ADBE Vector Shape - Group",
//                         hd: false,
//                       },
//                     ],
//                     nm: "e",
//                     np: 5,
//                     cix: 2,
//                     bm: 0,
//                     ix: 1,
//                     mn: "ADBE Vector Group",
//                     hd: false,
//                   },
//                 ],
//               },
//               fFamily: "Proxima Nova",
//             },
//             {
//               ch: "r",
//               size: 14,
//               style: "Regular",
//               w: 33,
//               data: {
//                 shapes: [
//                   {
//                     ty: "gr",
//                     it: [
//                       {
//                         ind: 0,
//                         ty: "sh",
//                         ix: 1,
//                         ks: {
//                           a: 0,
//                           k: {
//                             i: [
//                               [0, 0],
//                               [0, 0],
//                               [-4.633, 0],
//                               [-0.906, -0.201],
//                               [0, 0],
//                               [3.928, -5.136],
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                             ],
//                             o: [
//                               [0, 0],
//                               [2.216, -3.928],
//                               [1.208, 0],
//                               [0, 0],
//                               [-6.647, 0],
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                             ],
//                             v: [
//                               [15.106, 0],
//                               [15.106, -34.442],
//                               [28.299, -42.197],
//                               [31.32, -41.895],
//                               [31.32, -49.649],
//                               [15.106, -40.787],
//                               [15.106, -48.642],
//                               [7.553, -48.642],
//                               [7.553, 0],
//                             ],
//                             c: true,
//                           },
//                           ix: 2,
//                         },
//                         nm: "r",
//                         mn: "ADBE Vector Shape - Group",
//                         hd: false,
//                       },
//                     ],
//                     nm: "r",
//                     np: 3,
//                     cix: 2,
//                     bm: 0,
//                     ix: 1,
//                     mn: "ADBE Vector Group",
//                     hd: false,
//                   },
//                 ],
//               },
//               fFamily: "Proxima Nova",
//             },
//             {
//               ch: "l",
//               size: 14,
//               style: "Regular",
//               w: 22.5,
//               data: {
//                 shapes: [
//                   {
//                     ty: "gr",
//                     it: [
//                       {
//                         ind: 0,
//                         ty: "sh",
//                         ix: 1,
//                         ks: {
//                           a: 0,
//                           k: {
//                             i: [
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                             ],
//                             o: [
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                               [0, 0],
//                             ],
//                             v: [
//                               [15.106, 0],
//                               [15.106, -67.172],
//                               [7.553, -67.172],
//                               [7.553, 0],
//                             ],
//                             c: true,
//                           },
//                           ix: 2,
//                         },
//                         nm: "l",
//                         mn: "ADBE Vector Shape - Group",
//                         hd: false,
//                       },
//                     ],
//                     nm: "l",
//                     np: 3,
//                     cix: 2,
//                     bm: 0,
//                     ix: 1,
//                     mn: "ADBE Vector Group",
//                     hd: false,
//                   },
//                 ],
//               },
//               fFamily: "Proxima Nova",
//             },
//           ],
//         };
//         var PlayerEvents = {
//           circleJson: lottie.loadAnimation({
//             container: document.getElementById("json_anim"),
//             renderer: "svg",
//             loop: false,
//             autoplay: false,
//             animationData: object_json,
//           }),
//           jsonAnim: function jsonAnim() {
//             PlayerEvents.circleJson.setSpeed(0.5);
//             PlayerEvents.circleJson.play();
//           },
//         };
//         PlayerEvents.jsonAnim();
//         localStorage.setItem(window.location.pathname, 1);
//       }
//     },
//     readyHandler: function () {
//       $(
//         ".jw-icon.jw-icon-inline.jw-button-color.jw-reset.jw-icon-rewind"
//       ).hide();
//       var nextTenSecond =
//         '<div role="button" tabindex="0" aria-label="Backward 10 Seconds" style=""><img width="20" height="20" src="/addons/jw-icons/left.png" alt="Movies123"><div class="jw-reset jw-tooltip jw-tooltip-rewind" aria-expanded="true"><div class="jw-text">Backward 10 Seconds</div></div></div>';
//       var myFFButton = document.createElement("div");
//       myFFButton.id = "kfIINCYrUb_2";
//       myFFButton.setAttribute(
//         "class",
//         "jw-icon jw-icon-inline jw-button-color jw-reset"
//       );
//       myFFButton.setAttribute(
//         "onclick",
//         'jwplayer("wgknFWJuHz").seek(jwplayer("wgknFWJuHz").getPosition()-10);'
//       );
//       myFFButton.setAttribute(
//         "onmouseenter",
//         '$(this).find(".jw-reset").addClass("jw-open");$(this).find(".jw-reset").attr("aria-expanded","true");'
//       );
//       myFFButton.setAttribute(
//         "onmouseleave",
//         '$(this).find(".jw-reset").removeClass("jw-open");$(this).find(".jw-reset").attr("aria-expanded","false");'
//       );
//       var leftGroup = document.getElementsByClassName(
//         "jw-reset jw-button-container"
//       )[0];
//       leftGroup.insertBefore(myFFButton, leftGroup.childNodes[1]);
//       document.getElementById("kfIINCYrUb_2").innerHTML = nextTenSecond;
//       var nextTenSecond =
//         '<div role="button" tabindex="0" aria-label="Forward 10 Seconds" style=""><img width="20" height="20" src="/addons/jw-icons/right.png" alt="Movies123"><div class="jw-reset jw-tooltip jw-tooltip-rewind" aria-expanded="true"><div class="jw-text">Forward 10 Seconds</div></div></div>';
//       var myFFButton = document.createElement("div");
//       myFFButton.id = "kfIINCYrUb_1";
//       myFFButton.setAttribute(
//         "class",
//         "jw-icon jw-icon-inline jw-button-color jw-reset"
//       );
//       myFFButton.setAttribute(
//         "onclick",
//         'jwplayer("wgknFWJuHz").seek(jwplayer("wgknFWJuHz").getPosition()+10);'
//       );
//       myFFButton.setAttribute(
//         "onmouseenter",
//         '$(this).find(".jw-reset").addClass("jw-open");$(this).find(".jw-reset").attr("aria-expanded","true");'
//       );
//       myFFButton.setAttribute(
//         "onmouseleave",
//         '$(this).find(".jw-reset").removeClass("jw-open");$(this).find(".jw-reset").attr("aria-expanded","false");'
//       );
//       var leftGroup = document.getElementsByClassName(
//         "jw-reset jw-button-container"
//       )[0];
//       leftGroup.insertBefore(myFFButton, leftGroup.childNodes[2]);
//       document.getElementById("kfIINCYrUb_1").innerHTML = nextTenSecond;
//       Player.player.on("play", Player.onPlayerPlay);
//       if (
//         window.site_utils &&
//         window.site_utils.isMobile &&
//         !window.site_utils.isMobile()
//       ) {
//         Player.player.play();
//       } else {
//         $(Player.playerElem).hasClass("jw-flag-small-player") ||
//           $(Player.playerElem).addClass("jw-flag-small-player");
//         Player.dispachCheck = true;
//         Player.player.on("displayClick", Player.dispachClick);
//       }
//       jwplayer().on("fullscreen", function () {
//         if (
//           window.site_utils &&
//           window.site_utils.isMobile &&
//           window.site_utils.isMobile()
//         ) {
//           if (jwplayer().getFullscreen()) {
//             $(".trailer_link").css({ pointerEvents: "none" });
//             $(".media_wrap .right *").css({ pointerEvents: "none" });
//           } else {
//             $(".trailer_link").css({ pointerEvents: "all" });
//             $(".media_wrap .right *").css({ pointerEvents: "all" });
//           }
//         }
//       });
//     },
//     startJwPlayer: function (data) {
//       Player.player = jwplayer("wgknFWJuHz");
//       if (
//         data[0] &&
//         data[0].type &&
//         (data[0].type == "hls" || data[0].type == "m3u8")
//       ) {
//         window.config_player.config.file = data[0].file;
//         if (window.config_player.config.sources) {
//           delete window.config_player.config.sources;
//         }
//       } else {
//         window.config_player.config.sources = data;
//       }
//       window.config_player.config.tracks = Player.getSubs(data[0].language);
//       $("#bfXBTOZMwC").remove();
//       if (Player.needOnlyLoad) {
//         Player.player.load(window.config_player.config);
//         if (Player.seek_time) {
//           Player.player.play().seek(Player.seek_time);
//           Player.seek_time = false;
//         }
//       } else {
//         Player.player.setup(window.config_player.config);
//         Player.player.on("complete", Player.onCompleteFunction);
//         Player.player.on("error", Player.onErrorFunction);
//         Player.player.on("ready", Player.readyHandler);
//         Player.player.on("play", Player.onTime);
//         Player.player.on("pause", Player.pause);
//       }
//       Player.player.play();
//       if (window.innerWidth > 500) {
//         if (!window.config_player.buttons) {
//           window.config_player.buttons = [];
//         }
//         $.each(window.config_player.buttons, function (k, v) {
//           Player.player.addButton(
//             v.icon,
//             v.text,
//             function () {
//               eval(v.action);
//             },
//             v.id
//           );
//         });
//       }
//       if ($("#iDgkXUZslQ").length) {
//         Player.player.removeButton("next-ep-btn");
//         if ($("#iDgkXUZslQ  a.rDpZIFgYdC").next().length) {
//           Player.player.addButton(
//             "/addons/jw-icons/next-b.svg",
//             "Next episode",
//             function () {
//               Player.onCompleteThreeFunction();
//             },
//             "next-ep-btn"
//           );
//         }
//         Player.player.removeButton("prev-ep-btn");
//         if ($("#iDgkXUZslQ  a.rDpZIFgYdC").prev().length) {
//           Player.player.addButton(
//             "/addons/jw-icons/back-b.svg",
//             "Previous episode",
//             function () {
//               Player.onCompleteBeforeFunction();
//             },
//             "prev-ep-btn"
//           );
//         }
//       }
//       Player.player.resize(
//         "100%",
//         document.getElementById("wgknFWJuHz").offsetWidth * 0.5625
//       );
//     },
//     onCompleteBeforeFunction: function () {
//       Player.needOnlyLoad = true;
//       window.CustomiseCaptionsOptionTrigger = false;
//       if (
//         $("#iDgkXUZslQ ").length &&
//         $("#iDgkXUZslQ  a.rDpZIFgYdC").index() > 0
//       ) {
//         var nextLink = $("#iDgkXUZslQ  a.rDpZIFgYdC").prev().attr("href");
//         window.history.pushState({}, "", nextLink);
//         var next = $("#iDgkXUZslQ  a.rDpZIFgYdC").prev();
//         $("#iDgkXUZslQ  a").removeClass("rDpZIFgYdC");
//         next.addClass("rDpZIFgYdC");
//         Player.newName(next.text());
//         if ($("#iDgkXUZslQ a.rDpZIFgYdC").length) {
//           $("#iDgkXUZslQ").scrollLeft(
//             ($(".VeuZqfPiml ").width() +
//               parseInt($(".VeuZqfPiml").css("margin-left")) * 2) *
//               $("#iDgkXUZslQ a.rDpZIFgYdC").index()
//           );
//         }
//         Player.getNewSubs();
//         $(".WicSzgszdp.JkgCwETYpp").removeClass("JkgCwETYpp");
//         Player.getLinks(false);
//       }
//     },
//     onCompleteThreeFunction: function () {
//       Player.needOnlyLoad = true;
//       window.CustomiseCaptionsOptionTrigger = false;
//       if (
//         $("#iDgkXUZslQ ").length &&
//         $("#iDgkXUZslQ  a.rDpZIFgYdC").index() + 1 < $("#iDgkXUZslQ  a").length
//       ) {
//         var nextLink = $("#iDgkXUZslQ  a.rDpZIFgYdC").next().attr("href");
//         window.history.pushState({}, "", nextLink);
//         var next = $("#iDgkXUZslQ  a.rDpZIFgYdC").next();
//         $("#iDgkXUZslQ  a").removeClass("rDpZIFgYdC");
//         next.addClass("rDpZIFgYdC");
//         Player.newName(next.text());
//         if ($("#iDgkXUZslQ a.rDpZIFgYdC").length) {
//           $("#iDgkXUZslQ").scrollLeft(
//             ($(".VeuZqfPiml ").width() +
//               parseInt($(".VeuZqfPiml").css("margin-left")) * 2) *
//               $("#iDgkXUZslQ a.rDpZIFgYdC").index()
//           );
//         }
//         Player.getNewSubs();
//         $(".WicSzgszdp.JkgCwETYpp").removeClass("JkgCwETYpp");
//         Player.getLinks(false);
//       }
//     },
//     setOpenLoad: function () {
//       var seekPre = setInterval(function () {
//         $("#izYCgIMVBp").hide();
//         if ($("#izYCgIMVBp").css("display") == "none") {
//           clearInterval(seekPre);
//         }
//       }, 150);
//       $.ajax({
//         cache: false,
//         type: "GET",
//         url: location.pathname + "?start_watching",
//         dataType: "JSON",
//         success: function (data) {
//           Player.watching_counter = true;
//         },
//       });
//     },
//   };
//   function yjgbHJGhnnbHGN(string, key = "88", res = "") {
//     for (var i = 0; i < string.length; ) {
//       for (
//         var j = 0;
//         j < "113".toString().length && i < string.length;
//         j++, i++
//       ) {
//         res += String.fromCharCode(
//           string[i].charCodeAt(0) ^ "113".toString()[j].charCodeAt(0)
//         );
//       }
//     }
//     return res;
//   }
//   return Player.startPlayer();
// };
