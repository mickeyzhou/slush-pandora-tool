/*
 * slush-pandora-tool
 * https://github.com/mickeyzhou/slush-pandora-tool
 *
 * Copyright (c) 2017, zhoumingming
 * Licensed under the MIT license.
 */

'use strict';

var gulp = require('gulp'),
    install = require('gulp-install'),
    conflict = require('gulp-conflict'),
    template = require('gulp-template'),
    rename = require('gulp-rename'),
    _ = require('underscore.string'),
    inquirer = require('inquirer'),
    path = require('path');

function format(string) {
    var username = string.toLowerCase();
    return username.replace(/\s/g, '');
}

var defaults = (function () {
    var workingDirName = path.basename(process.cwd()),
      homeDir, osUserName, configFile, user;

    if (process.platform === 'win32') {
        homeDir = process.env.USERPROFILE;
        osUserName = process.env.USERNAME || path.basename(homeDir).toLowerCase();
    }
    else {
        homeDir = process.env.HOME || process.env.HOMEPATH;
        osUserName = homeDir && homeDir.split('/').pop() || 'root';
    }

    configFile = path.join(homeDir, '.gitconfig');
    user = {};

    if (require('fs').existsSync(configFile)) {
        user = require('iniparser').parseSync(configFile).user;
    }

    return {
        toolName: workingDirName,
        userName: osUserName || format(user.name || ''),
        authorName: user.name || '',
        authorEmail: user.email || ''
    };
})();

gulp.task('default', function (done) {
    var prompts = [{
        name: 'toolName',
        message: 'What is the name of your tool?',
        default: defaults.toolName
    }];
    //Ask
    inquirer.prompt(prompts,
        function (answers) {
            var name = answers.toolName;
            gulp.src(__dirname+'/templates/page/**')
                .pipe(gulp.dest('./client/pages/'+name))
                

            gulp.src(__dirname+'/templates/controller/controller_tmp.js')
                .pipe(rename(name+'.js'))
                .pipe(gulp.dest('./src/tools/controller'))


            gulp.src(__dirname+'/templates/view/view_tmp.jade')
                .pipe(template({name: name}))
                .pipe(rename(name+'_index.jade'))
                .pipe(gulp.dest('./view/tools'))
                .on('end', function(){
                    done();
                });        
        });
});
