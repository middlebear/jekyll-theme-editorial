---
title:            "Sign In"
date:             2019-05-01 01:23:45 -0800
permalink:        /signin
---

This is a demo page of what a form page might look like. You probably need a static identity/authentication/authorization provider like [Userbase](https://userbase.com/ "Go to userbase.com") to make this work.

<form method="post" action="#">
  <div class="row gtr-uniform">
    <div class="col-6 off-3">
      <input type="text" name="username" id="username" value="" placeholder="Name">
    </div>
    <!-- Break -->
    <div class="col-6 off-3">
      <input type="text" name="pwd" id="pwd" value="" placeholder="Password">
    </div>
    <!-- Break -->
    <div class="col-6 off-3">
      <input type="checkbox" id="stay-signedin" name="stay-signedin" checked="">
      <label for="stay-signedin">Keep me signed in for 2 weeks</label>
    </div>
    <!-- Break -->
    <div class="col-6 off-3">
      <ul class="actions">
        <li><input type="submit" value="Sign In" class="primary"></li>
        <li><input type="reset" value="Reset"></li>
      </ul>
    </div>
  </div>
</form>