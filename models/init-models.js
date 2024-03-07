var DataTypes = require("sequelize").DataTypes;
var _altgeo = require("./altgeo");
var _altgeo_190215 = require("./altgeo_190215");
var _altgeo_190228 = require("./altgeo_190228");
var _altgeo_190314 = require("./altgeo_190314");
var _altgeo_190315 = require("./altgeo_190315");
var _altgeodescription = require("./altgeodescription");
var _altgeomap = require("./altgeomap");
var _altgeomap_190215 = require("./altgeomap_190215");
var _altgeomap_deleted = require("./altgeomap_deleted");
var _cachestudent = require("./cachestudent");
var _daftmphris = require("./daftmphris");
var _fhdata = require("./fhdata");
var _fhforms = require("./fhforms");
var _fhpost = require("./fhpost");
var _kbdata = require("./kbdata");
var _kbform = require("./kbform");
var _kblog = require("./kblog");
var _kbmapping = require("./kbmapping");
var _rallreports = require("./rallreports");
var _rallreports_copy = require("./rallreports_copy");
var _rallreports_incase = require("./rallreports_incase");
var _rparreports = require("./rparreports");
var _s3archivecfg = require("./s3archivecfg");
var _s3archivecfg_tmp = require("./s3archivecfg_tmp");
var _s3archivelog = require("./s3archivelog");
var _smsphones = require("./smsphones");
var _table 212 = require("./table 212");
var _table 213 = require("./table 213");
var _talldays = require("./talldays");
var _tbl_user_accounts = require("./tbl_user_accounts");
var _tblalerts = require("./tblalerts");
var _tblapprovedabsence = require("./tblapprovedabsence");
var _tblattendance_diff = require("./tblattendance_diff");
var _tblattendance_restore = require("./tblattendance_restore");
var _tblattreports = require("./tblattreports");
var _tblattreports_del = require("./tblattreports_del");
var _tblctreport = require("./tblctreport");
var _tblctreport_171110 = require("./tblctreport_171110");
var _tblctreport_1920 = require("./tblctreport_1920");
var _tblctreport_archive = require("./tblctreport_archive");
var _tblctreport_log = require("./tblctreport_log");
var _tblctsmslast = require("./tblctsmslast");
var _tblctsmsreport = require("./tblctsmsreport");
var _tblcttmp = require("./tblcttmp");
var _tblcttmp1 = require("./tblcttmp1");
var _tbldisabled = require("./tbldisabled");
var _tblenrclo = require("./tblenrclo");
var _tblenrolment = require("./tblenrolment");
var _tblenrolment2015 = require("./tblenrolment2015");
var _tblenrolment2016 = require("./tblenrolment2016");
var _tblenrolment2019 = require("./tblenrolment2019");
var _tblenrolment_2017 = require("./tblenrolment_2017");
var _tblenrolment_2018 = require("./tblenrolment_2018");
var _tblenrolment_httest = require("./tblenrolment_httest");
var _tblenrolment_restore = require("./tblenrolment_restore");
var _tblform = require("./tblform");
var _tblholidays = require("./tblholidays");
var _tblhrisschoolactivity = require("./tblhrisschoolactivity");
var _tblhristeachers = require("./tblhristeachers");
var _tblhristeachers_staffbylocation = require("./tblhristeachers_staffbylocation");
var _tblimpactinterfacepay_log = require("./tblimpactinterfacepay_log");
var _tblimpactschacc = require("./tblimpactschacc");
var _tblimpactschacc_181214 = require("./tblimpactschacc_181214");
var _tblimpactschacc_deletion = require("./tblimpactschacc_deletion");
var _tblimpactschacc_log = require("./tblimpactschacc_log");
var _tblimpactschacc_uploads = require("./tblimpactschacc_uploads");
var _tblimpactteaacc = require("./tblimpactteaacc");
var _tblimpactteaacc_181214 = require("./tblimpactteaacc_181214");
var _tblimpactteaacc_deletion = require("./tblimpactteaacc_deletion");
var _tblimpactteaacc_log = require("./tblimpactteaacc_log");
var _tblindicators = require("./tblindicators");
var _tbllang = require("./tbllang");
var _tblmsg = require("./tblmsg");
var _tblmsgreply = require("./tblmsgreply");
var _tblopts = require("./tblopts");
var _tbloutgoingsms = require("./tbloutgoingsms");
var _tblpanosumdata = require("./tblpanosumdata");
var _tblpanosumtitles = require("./tblpanosumtitles");
var _tblphone = require("./tblphone");
var _tblsbrtarchivedreports = require("./tblsbrtarchivedreports");
var _tblsbrtatt = require("./tblsbrtatt");
var _tblsbrtbank = require("./tblsbrtbank");
var _tblsbrtbank_log = require("./tblsbrtbank_log");
var _tblsbrtbank_uploads = require("./tblsbrtbank_uploads");
var _tblsbrtbankcodes = require("./tblsbrtbankcodes");
var _tblsbrtbgta = require("./tblsbrtbgta");
var _tblsbrtbgta_1 = require("./tblsbrtbgta_1");
var _tblsbrtbgtb = require("./tblsbrtbgtb");
var _tblsbrtbgtb_1 = require("./tblsbrtbgtb_1");
var _tblsbrtcodes = require("./tblsbrtcodes");
var _tblsbrtenr = require("./tblsbrtenr");
var _tblsbrtenrnph = require("./tblsbrtenrnph");
var _tblsbrtequity = require("./tblsbrtequity");
var _tblsbrtfiles = require("./tblsbrtfiles");
var _tblsbrtfiles_log = require("./tblsbrtfiles_log");
var _tblsbrtic1a = require("./tblsbrtic1a");
var _tblsbrtic1b = require("./tblsbrtic1b");
var _tblsbrtic2a = require("./tblsbrtic2a");
var _tblsbrtic2b = require("./tblsbrtic2b");
var _tblsbrtip = require("./tblsbrtip");
var _tblsbrtlgra = require("./tblsbrtlgra");
var _tblsbrtlgra_1 = require("./tblsbrtlgra_1");
var _tblsbrtlgrb = require("./tblsbrtlgrb");
var _tblsbrtlgrb_1 = require("./tblsbrtlgrb_1");
var _tblsbrtlog = require("./tblsbrtlog");
var _tblsbrtmbra = require("./tblsbrtmbra");
var _tblsbrtmbrb = require("./tblsbrtmbrb");
var _tblsbrtreca = require("./tblsbrtreca");
var _tblsbrtrecb = require("./tblsbrtrecb");
var _tblsbrtreport = require("./tblsbrtreport");
var _tblsbrtreport_180117 = require("./tblsbrtreport_180117");
var _tblsbrtreport_archive = require("./tblsbrtreport_archive");
var _tblsbrtreport_log = require("./tblsbrtreport_log");
var _tblsbrtrpta = require("./tblsbrtrpta");
var _tblsbrtrpta_1 = require("./tblsbrtrpta_1");
var _tblsbrtrptb = require("./tblsbrtrptb");
var _tblsbrtrptb_1 = require("./tblsbrtrptb_1");
var _tblsbrtrptc = require("./tblsbrtrptc");
var _tblsbrtrptc_1 = require("./tblsbrtrptc_1");
var _tblsbrtsuma = require("./tblsbrtsuma");
var _tblsbrttina = require("./tblsbrttina");
var _tblsbrttinb = require("./tblsbrttinb");
var _tblsbrttmp = require("./tblsbrttmp");
var _tblsbrttpya = require("./tblsbrttpya");
var _tblsbrttpyb = require("./tblsbrttpyb");
var _tblsbrtuploads = require("./tblsbrtuploads");
var _tblsbrtusers = require("./tblsbrtusers");
var _tblschauth = require("./tblschauth");
var _tblschdata = require("./tblschdata");
var _tblschdata_2017 = require("./tblschdata_2017");
var _tblschdata_old = require("./tblschdata_old");
var _tblschdropout = require("./tblschdropout");
var _tblschemis = require("./tblschemis");
var _tblschool = require("./tblschool");
var _tblschool_old = require("./tblschool_old");
var _tblschstatus = require("./tblschstatus");
var _tblschstatushist = require("./tblschstatushist");
var _tblsstischacc = require("./tblsstischacc");
var _tblsstischacc_190520 = require("./tblsstischacc_190520");
var _tblsstischacc_log = require("./tblsstischacc_log");
var _tblsstischacc_uploads = require("./tblsstischacc_uploads");
var _tblsstiteaacc = require("./tblsstiteaacc");
var _tblsstiteaacc_190520 = require("./tblsstiteaacc_190520");
var _tblsstiteaacc_log = require("./tblsstiteaacc_log");
var _tblstafflog = require("./tblstafflog");
var _tblstoreddownloads = require("./tblstoreddownloads");
var _tblstudent = require("./tblstudent");
var _tblstudent2015 = require("./tblstudent2015");
var _tblstudent_2017 = require("./tblstudent_2017");
var _tblstudent_2018 = require("./tblstudent_2018");
var _tblstudent_httest = require("./tblstudent_httest");
var _tblsubscription = require("./tblsubscription");
var _tblteacherassignhist = require("./tblteacherassignhist");
var _tblteacheratt = require("./tblteacheratt");
var _tblteacherlist = require("./tblteacherlist");
var _tblterm = require("./tblterm");
var _tbltmppayammapping = require("./tbltmppayammapping");
var _tbltrackerfiles = require("./tbltrackerfiles");
var _tbluiddata = require("./tbluiddata");
var _tbluser = require("./tbluser");
var _tbluser_2017 = require("./tbluser_2017");
var _tbluser_log = require("./tbluser_log");
var _tbluser_old = require("./tbluser_old");
var _tblworkingdays = require("./tblworkingdays");
var _tbomas = require("./tbomas");
var _tcodes = require("./tcodes");
var _tcodes_old = require("./tcodes_old");
var _tcounties = require("./tcounties");
var _tcounties_10 = require("./tcounties_10");
var _tcounties_1028 = require("./tcounties_1028");
var _tlog = require("./tlog");
var _tlog_2017 = require("./tlog_2017");
var _tlog_2018 = require("./tlog_2018");
var _tlog_2019_08 = require("./tlog_2019_08");
var _tmpatt2018 = require("./tmpatt2018");
var _tmpattsummary = require("./tmpattsummary");
var _tmpcurrentenr = require("./tmpcurrentenr");
var _tmpenrbyday = require("./tmpenrbyday");
var _tmpenrhist = require("./tmpenrhist");
var _tmpenrsummary = require("./tmpenrsummary");
var _tmpgeoflat = require("./tmpgeoflat");
var _tmpgeoflat_1028 = require("./tmpgeoflat_1028");
var _tmpimpactauthorised = require("./tmpimpactauthorised");
var _tmpimpactpayment = require("./tmpimpactpayment");
var _tmpmapdata = require("./tmpmapdata");
var _tmppaidschool = require("./tmppaidschool");
var _tmppayreports = require("./tmppayreports");
var _tmppayreports_181207 = require("./tmppayreports_181207");
var _tmpplaceholders = require("./tmpplaceholders");
var _tmpschhist = require("./tmpschhist");
var _tmpschoollist = require("./tmpschoollist");
var _tmpstudentage = require("./tmpstudentage");
var _tpayam = require("./tpayam");
var _tpayam_10 = require("./tpayam_10");
var _tpayam_1028 = require("./tpayam_1028");
var _tstateanchors = require("./tstateanchors");
var _tstates = require("./tstates");
var _tstates_10 = require("./tstates_10");
var _tstates_1028 = require("./tstates_1028");

function initModels(sequelize) {
  var altgeo = _altgeo(sequelize, DataTypes);
  var altgeo_190215 = _altgeo_190215(sequelize, DataTypes);
  var altgeo_190228 = _altgeo_190228(sequelize, DataTypes);
  var altgeo_190314 = _altgeo_190314(sequelize, DataTypes);
  var altgeo_190315 = _altgeo_190315(sequelize, DataTypes);
  var altgeodescription = _altgeodescription(sequelize, DataTypes);
  var altgeomap = _altgeomap(sequelize, DataTypes);
  var altgeomap_190215 = _altgeomap_190215(sequelize, DataTypes);
  var altgeomap_deleted = _altgeomap_deleted(sequelize, DataTypes);
  var cachestudent = _cachestudent(sequelize, DataTypes);
  var daftmphris = _daftmphris(sequelize, DataTypes);
  var fhdata = _fhdata(sequelize, DataTypes);
  var fhforms = _fhforms(sequelize, DataTypes);
  var fhpost = _fhpost(sequelize, DataTypes);
  var kbdata = _kbdata(sequelize, DataTypes);
  var kbform = _kbform(sequelize, DataTypes);
  var kblog = _kblog(sequelize, DataTypes);
  var kbmapping = _kbmapping(sequelize, DataTypes);
  var rallreports = _rallreports(sequelize, DataTypes);
  var rallreports_copy = _rallreports_copy(sequelize, DataTypes);
  var rallreports_incase = _rallreports_incase(sequelize, DataTypes);
  var rparreports = _rparreports(sequelize, DataTypes);
  var s3archivecfg = _s3archivecfg(sequelize, DataTypes);
  var s3archivecfg_tmp = _s3archivecfg_tmp(sequelize, DataTypes);
  var s3archivelog = _s3archivelog(sequelize, DataTypes);
  var smsphones = _smsphones(sequelize, DataTypes);
  var table 212 = _table 212(sequelize, DataTypes);
  var table 213 = _table 213(sequelize, DataTypes);
  var talldays = _talldays(sequelize, DataTypes);
  var tbl_user_accounts = _tbl_user_accounts(sequelize, DataTypes);
  var tblalerts = _tblalerts(sequelize, DataTypes);
  var tblapprovedabsence = _tblapprovedabsence(sequelize, DataTypes);
  var tblattendance_diff = _tblattendance_diff(sequelize, DataTypes);
  var tblattendance_restore = _tblattendance_restore(sequelize, DataTypes);
  var tblattreports = _tblattreports(sequelize, DataTypes);
  var tblattreports_del = _tblattreports_del(sequelize, DataTypes);
  var tblctreport = _tblctreport(sequelize, DataTypes);
  var tblctreport_171110 = _tblctreport_171110(sequelize, DataTypes);
  var tblctreport_1920 = _tblctreport_1920(sequelize, DataTypes);
  var tblctreport_archive = _tblctreport_archive(sequelize, DataTypes);
  var tblctreport_log = _tblctreport_log(sequelize, DataTypes);
  var tblctsmslast = _tblctsmslast(sequelize, DataTypes);
  var tblctsmsreport = _tblctsmsreport(sequelize, DataTypes);
  var tblcttmp = _tblcttmp(sequelize, DataTypes);
  var tblcttmp1 = _tblcttmp1(sequelize, DataTypes);
  var tbldisabled = _tbldisabled(sequelize, DataTypes);
  var tblenrclo = _tblenrclo(sequelize, DataTypes);
  var tblenrolment = _tblenrolment(sequelize, DataTypes);
  var tblenrolment2015 = _tblenrolment2015(sequelize, DataTypes);
  var tblenrolment2016 = _tblenrolment2016(sequelize, DataTypes);
  var tblenrolment2019 = _tblenrolment2019(sequelize, DataTypes);
  var tblenrolment_2017 = _tblenrolment_2017(sequelize, DataTypes);
  var tblenrolment_2018 = _tblenrolment_2018(sequelize, DataTypes);
  var tblenrolment_httest = _tblenrolment_httest(sequelize, DataTypes);
  var tblenrolment_restore = _tblenrolment_restore(sequelize, DataTypes);
  var tblform = _tblform(sequelize, DataTypes);
  var tblholidays = _tblholidays(sequelize, DataTypes);
  var tblhrisschoolactivity = _tblhrisschoolactivity(sequelize, DataTypes);
  var tblhristeachers = _tblhristeachers(sequelize, DataTypes);
  var tblhristeachers_staffbylocation = _tblhristeachers_staffbylocation(sequelize, DataTypes);
  var tblimpactinterfacepay_log = _tblimpactinterfacepay_log(sequelize, DataTypes);
  var tblimpactschacc = _tblimpactschacc(sequelize, DataTypes);
  var tblimpactschacc_181214 = _tblimpactschacc_181214(sequelize, DataTypes);
  var tblimpactschacc_deletion = _tblimpactschacc_deletion(sequelize, DataTypes);
  var tblimpactschacc_log = _tblimpactschacc_log(sequelize, DataTypes);
  var tblimpactschacc_uploads = _tblimpactschacc_uploads(sequelize, DataTypes);
  var tblimpactteaacc = _tblimpactteaacc(sequelize, DataTypes);
  var tblimpactteaacc_181214 = _tblimpactteaacc_181214(sequelize, DataTypes);
  var tblimpactteaacc_deletion = _tblimpactteaacc_deletion(sequelize, DataTypes);
  var tblimpactteaacc_log = _tblimpactteaacc_log(sequelize, DataTypes);
  var tblindicators = _tblindicators(sequelize, DataTypes);
  var tbllang = _tbllang(sequelize, DataTypes);
  var tblmsg = _tblmsg(sequelize, DataTypes);
  var tblmsgreply = _tblmsgreply(sequelize, DataTypes);
  var tblopts = _tblopts(sequelize, DataTypes);
  var tbloutgoingsms = _tbloutgoingsms(sequelize, DataTypes);
  var tblpanosumdata = _tblpanosumdata(sequelize, DataTypes);
  var tblpanosumtitles = _tblpanosumtitles(sequelize, DataTypes);
  var tblphone = _tblphone(sequelize, DataTypes);
  var tblsbrtarchivedreports = _tblsbrtarchivedreports(sequelize, DataTypes);
  var tblsbrtatt = _tblsbrtatt(sequelize, DataTypes);
  var tblsbrtbank = _tblsbrtbank(sequelize, DataTypes);
  var tblsbrtbank_log = _tblsbrtbank_log(sequelize, DataTypes);
  var tblsbrtbank_uploads = _tblsbrtbank_uploads(sequelize, DataTypes);
  var tblsbrtbankcodes = _tblsbrtbankcodes(sequelize, DataTypes);
  var tblsbrtbgta = _tblsbrtbgta(sequelize, DataTypes);
  var tblsbrtbgta_1 = _tblsbrtbgta_1(sequelize, DataTypes);
  var tblsbrtbgtb = _tblsbrtbgtb(sequelize, DataTypes);
  var tblsbrtbgtb_1 = _tblsbrtbgtb_1(sequelize, DataTypes);
  var tblsbrtcodes = _tblsbrtcodes(sequelize, DataTypes);
  var tblsbrtenr = _tblsbrtenr(sequelize, DataTypes);
  var tblsbrtenrnph = _tblsbrtenrnph(sequelize, DataTypes);
  var tblsbrtequity = _tblsbrtequity(sequelize, DataTypes);
  var tblsbrtfiles = _tblsbrtfiles(sequelize, DataTypes);
  var tblsbrtfiles_log = _tblsbrtfiles_log(sequelize, DataTypes);
  var tblsbrtic1a = _tblsbrtic1a(sequelize, DataTypes);
  var tblsbrtic1b = _tblsbrtic1b(sequelize, DataTypes);
  var tblsbrtic2a = _tblsbrtic2a(sequelize, DataTypes);
  var tblsbrtic2b = _tblsbrtic2b(sequelize, DataTypes);
  var tblsbrtip = _tblsbrtip(sequelize, DataTypes);
  var tblsbrtlgra = _tblsbrtlgra(sequelize, DataTypes);
  var tblsbrtlgra_1 = _tblsbrtlgra_1(sequelize, DataTypes);
  var tblsbrtlgrb = _tblsbrtlgrb(sequelize, DataTypes);
  var tblsbrtlgrb_1 = _tblsbrtlgrb_1(sequelize, DataTypes);
  var tblsbrtlog = _tblsbrtlog(sequelize, DataTypes);
  var tblsbrtmbra = _tblsbrtmbra(sequelize, DataTypes);
  var tblsbrtmbrb = _tblsbrtmbrb(sequelize, DataTypes);
  var tblsbrtreca = _tblsbrtreca(sequelize, DataTypes);
  var tblsbrtrecb = _tblsbrtrecb(sequelize, DataTypes);
  var tblsbrtreport = _tblsbrtreport(sequelize, DataTypes);
  var tblsbrtreport_180117 = _tblsbrtreport_180117(sequelize, DataTypes);
  var tblsbrtreport_archive = _tblsbrtreport_archive(sequelize, DataTypes);
  var tblsbrtreport_log = _tblsbrtreport_log(sequelize, DataTypes);
  var tblsbrtrpta = _tblsbrtrpta(sequelize, DataTypes);
  var tblsbrtrpta_1 = _tblsbrtrpta_1(sequelize, DataTypes);
  var tblsbrtrptb = _tblsbrtrptb(sequelize, DataTypes);
  var tblsbrtrptb_1 = _tblsbrtrptb_1(sequelize, DataTypes);
  var tblsbrtrptc = _tblsbrtrptc(sequelize, DataTypes);
  var tblsbrtrptc_1 = _tblsbrtrptc_1(sequelize, DataTypes);
  var tblsbrtsuma = _tblsbrtsuma(sequelize, DataTypes);
  var tblsbrttina = _tblsbrttina(sequelize, DataTypes);
  var tblsbrttinb = _tblsbrttinb(sequelize, DataTypes);
  var tblsbrttmp = _tblsbrttmp(sequelize, DataTypes);
  var tblsbrttpya = _tblsbrttpya(sequelize, DataTypes);
  var tblsbrttpyb = _tblsbrttpyb(sequelize, DataTypes);
  var tblsbrtuploads = _tblsbrtuploads(sequelize, DataTypes);
  var tblsbrtusers = _tblsbrtusers(sequelize, DataTypes);
  var tblschauth = _tblschauth(sequelize, DataTypes);
  var tblschdata = _tblschdata(sequelize, DataTypes);
  var tblschdata_2017 = _tblschdata_2017(sequelize, DataTypes);
  var tblschdata_old = _tblschdata_old(sequelize, DataTypes);
  var tblschdropout = _tblschdropout(sequelize, DataTypes);
  var tblschemis = _tblschemis(sequelize, DataTypes);
  var tblschool = _tblschool(sequelize, DataTypes);
  var tblschool_old = _tblschool_old(sequelize, DataTypes);
  var tblschstatus = _tblschstatus(sequelize, DataTypes);
  var tblschstatushist = _tblschstatushist(sequelize, DataTypes);
  var tblsstischacc = _tblsstischacc(sequelize, DataTypes);
  var tblsstischacc_190520 = _tblsstischacc_190520(sequelize, DataTypes);
  var tblsstischacc_log = _tblsstischacc_log(sequelize, DataTypes);
  var tblsstischacc_uploads = _tblsstischacc_uploads(sequelize, DataTypes);
  var tblsstiteaacc = _tblsstiteaacc(sequelize, DataTypes);
  var tblsstiteaacc_190520 = _tblsstiteaacc_190520(sequelize, DataTypes);
  var tblsstiteaacc_log = _tblsstiteaacc_log(sequelize, DataTypes);
  var tblstafflog = _tblstafflog(sequelize, DataTypes);
  var tblstoreddownloads = _tblstoreddownloads(sequelize, DataTypes);
  var tblstudent = _tblstudent(sequelize, DataTypes);
  var tblstudent2015 = _tblstudent2015(sequelize, DataTypes);
  var tblstudent_2017 = _tblstudent_2017(sequelize, DataTypes);
  var tblstudent_2018 = _tblstudent_2018(sequelize, DataTypes);
  var tblstudent_httest = _tblstudent_httest(sequelize, DataTypes);
  var tblsubscription = _tblsubscription(sequelize, DataTypes);
  var tblteacherassignhist = _tblteacherassignhist(sequelize, DataTypes);
  var tblteacheratt = _tblteacheratt(sequelize, DataTypes);
  var tblteacherlist = _tblteacherlist(sequelize, DataTypes);
  var tblterm = _tblterm(sequelize, DataTypes);
  var tbltmppayammapping = _tbltmppayammapping(sequelize, DataTypes);
  var tbltrackerfiles = _tbltrackerfiles(sequelize, DataTypes);
  var tbluiddata = _tbluiddata(sequelize, DataTypes);
  var tbluser = _tbluser(sequelize, DataTypes);
  var tbluser_2017 = _tbluser_2017(sequelize, DataTypes);
  var tbluser_log = _tbluser_log(sequelize, DataTypes);
  var tbluser_old = _tbluser_old(sequelize, DataTypes);
  var tblworkingdays = _tblworkingdays(sequelize, DataTypes);
  var tbomas = _tbomas(sequelize, DataTypes);
  var tcodes = _tcodes(sequelize, DataTypes);
  var tcodes_old = _tcodes_old(sequelize, DataTypes);
  var tcounties = _tcounties(sequelize, DataTypes);
  var tcounties_10 = _tcounties_10(sequelize, DataTypes);
  var tcounties_1028 = _tcounties_1028(sequelize, DataTypes);
  var tlog = _tlog(sequelize, DataTypes);
  var tlog_2017 = _tlog_2017(sequelize, DataTypes);
  var tlog_2018 = _tlog_2018(sequelize, DataTypes);
  var tlog_2019_08 = _tlog_2019_08(sequelize, DataTypes);
  var tmpatt2018 = _tmpatt2018(sequelize, DataTypes);
  var tmpattsummary = _tmpattsummary(sequelize, DataTypes);
  var tmpcurrentenr = _tmpcurrentenr(sequelize, DataTypes);
  var tmpenrbyday = _tmpenrbyday(sequelize, DataTypes);
  var tmpenrhist = _tmpenrhist(sequelize, DataTypes);
  var tmpenrsummary = _tmpenrsummary(sequelize, DataTypes);
  var tmpgeoflat = _tmpgeoflat(sequelize, DataTypes);
  var tmpgeoflat_1028 = _tmpgeoflat_1028(sequelize, DataTypes);
  var tmpimpactauthorised = _tmpimpactauthorised(sequelize, DataTypes);
  var tmpimpactpayment = _tmpimpactpayment(sequelize, DataTypes);
  var tmpmapdata = _tmpmapdata(sequelize, DataTypes);
  var tmppaidschool = _tmppaidschool(sequelize, DataTypes);
  var tmppayreports = _tmppayreports(sequelize, DataTypes);
  var tmppayreports_181207 = _tmppayreports_181207(sequelize, DataTypes);
  var tmpplaceholders = _tmpplaceholders(sequelize, DataTypes);
  var tmpschhist = _tmpschhist(sequelize, DataTypes);
  var tmpschoollist = _tmpschoollist(sequelize, DataTypes);
  var tmpstudentage = _tmpstudentage(sequelize, DataTypes);
  var tpayam = _tpayam(sequelize, DataTypes);
  var tpayam_10 = _tpayam_10(sequelize, DataTypes);
  var tpayam_1028 = _tpayam_1028(sequelize, DataTypes);
  var tstateanchors = _tstateanchors(sequelize, DataTypes);
  var tstates = _tstates(sequelize, DataTypes);
  var tstates_10 = _tstates_10(sequelize, DataTypes);
  var tstates_1028 = _tstates_1028(sequelize, DataTypes);


  return {
    altgeo,
    altgeo_190215,
    altgeo_190228,
    altgeo_190314,
    altgeo_190315,
    altgeodescription,
    altgeomap,
    altgeomap_190215,
    altgeomap_deleted,
    cachestudent,
    daftmphris,
    fhdata,
    fhforms,
    fhpost,
    kbdata,
    kbform,
    kblog,
    kbmapping,
    rallreports,
    rallreports_copy,
    rallreports_incase,
    rparreports,
    s3archivecfg,
    s3archivecfg_tmp,
    s3archivelog,
    smsphones,
    table 212,
    table 213,
    talldays,
    tbl_user_accounts,
    tblalerts,
    tblapprovedabsence,
    tblattendance_diff,
    tblattendance_restore,
    tblattreports,
    tblattreports_del,
    tblctreport,
    tblctreport_171110,
    tblctreport_1920,
    tblctreport_archive,
    tblctreport_log,
    tblctsmslast,
    tblctsmsreport,
    tblcttmp,
    tblcttmp1,
    tbldisabled,
    tblenrclo,
    tblenrolment,
    tblenrolment2015,
    tblenrolment2016,
    tblenrolment2019,
    tblenrolment_2017,
    tblenrolment_2018,
    tblenrolment_httest,
    tblenrolment_restore,
    tblform,
    tblholidays,
    tblhrisschoolactivity,
    tblhristeachers,
    tblhristeachers_staffbylocation,
    tblimpactinterfacepay_log,
    tblimpactschacc,
    tblimpactschacc_181214,
    tblimpactschacc_deletion,
    tblimpactschacc_log,
    tblimpactschacc_uploads,
    tblimpactteaacc,
    tblimpactteaacc_181214,
    tblimpactteaacc_deletion,
    tblimpactteaacc_log,
    tblindicators,
    tbllang,
    tblmsg,
    tblmsgreply,
    tblopts,
    tbloutgoingsms,
    tblpanosumdata,
    tblpanosumtitles,
    tblphone,
    tblsbrtarchivedreports,
    tblsbrtatt,
    tblsbrtbank,
    tblsbrtbank_log,
    tblsbrtbank_uploads,
    tblsbrtbankcodes,
    tblsbrtbgta,
    tblsbrtbgta_1,
    tblsbrtbgtb,
    tblsbrtbgtb_1,
    tblsbrtcodes,
    tblsbrtenr,
    tblsbrtenrnph,
    tblsbrtequity,
    tblsbrtfiles,
    tblsbrtfiles_log,
    tblsbrtic1a,
    tblsbrtic1b,
    tblsbrtic2a,
    tblsbrtic2b,
    tblsbrtip,
    tblsbrtlgra,
    tblsbrtlgra_1,
    tblsbrtlgrb,
    tblsbrtlgrb_1,
    tblsbrtlog,
    tblsbrtmbra,
    tblsbrtmbrb,
    tblsbrtreca,
    tblsbrtrecb,
    tblsbrtreport,
    tblsbrtreport_180117,
    tblsbrtreport_archive,
    tblsbrtreport_log,
    tblsbrtrpta,
    tblsbrtrpta_1,
    tblsbrtrptb,
    tblsbrtrptb_1,
    tblsbrtrptc,
    tblsbrtrptc_1,
    tblsbrtsuma,
    tblsbrttina,
    tblsbrttinb,
    tblsbrttmp,
    tblsbrttpya,
    tblsbrttpyb,
    tblsbrtuploads,
    tblsbrtusers,
    tblschauth,
    tblschdata,
    tblschdata_2017,
    tblschdata_old,
    tblschdropout,
    tblschemis,
    tblschool,
    tblschool_old,
    tblschstatus,
    tblschstatushist,
    tblsstischacc,
    tblsstischacc_190520,
    tblsstischacc_log,
    tblsstischacc_uploads,
    tblsstiteaacc,
    tblsstiteaacc_190520,
    tblsstiteaacc_log,
    tblstafflog,
    tblstoreddownloads,
    tblstudent,
    tblstudent2015,
    tblstudent_2017,
    tblstudent_2018,
    tblstudent_httest,
    tblsubscription,
    tblteacherassignhist,
    tblteacheratt,
    tblteacherlist,
    tblterm,
    tbltmppayammapping,
    tbltrackerfiles,
    tbluiddata,
    tbluser,
    tbluser_2017,
    tbluser_log,
    tbluser_old,
    tblworkingdays,
    tbomas,
    tcodes,
    tcodes_old,
    tcounties,
    tcounties_10,
    tcounties_1028,
    tlog,
    tlog_2017,
    tlog_2018,
    tlog_2019_08,
    tmpatt2018,
    tmpattsummary,
    tmpcurrentenr,
    tmpenrbyday,
    tmpenrhist,
    tmpenrsummary,
    tmpgeoflat,
    tmpgeoflat_1028,
    tmpimpactauthorised,
    tmpimpactpayment,
    tmpmapdata,
    tmppaidschool,
    tmppayreports,
    tmppayreports_181207,
    tmpplaceholders,
    tmpschhist,
    tmpschoollist,
    tmpstudentage,
    tpayam,
    tpayam_10,
    tpayam_1028,
    tstateanchors,
    tstates,
    tstates_10,
    tstates_1028,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
