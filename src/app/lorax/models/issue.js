define([
    'lodash',
    'lorax/models/tag',
    'lorax/models/infographic'
], function (
    _,
    TagModel,
    InfographicModel
) {
    'use strict';

    var IssueModel = function (
        parentInstance,
        id,
        data,
        tags,
        localeData,
        infographicData,
        localeDataAll
    ) {
        this._parent = parentInstance;
        this._id = id;
        this._name = localeData.name;
        this._status = data.status;
        this._title = localeData.title;
        this._narrative = localeData.narrative;
        this._mozActionCopy = localeData.mozActionCopy;
        this._yourActionCopy = localeData.yourActionCopy;
        this._mozActionLink = localeData.mozActionLink;
        this._yourActionLink = localeData.yourActionLink;
        this._infographicType = data.infographicType;
        this._infographicOverflow = data.infographicOverflow;
        this._infographicIsMap = data.infographicMap;
        this._shareUrl = localeData.shareUrl;
        this._tags = [];
        this._infographic = new InfographicModel(
            this._id,
            this._infographicType,
            infographicData
        );
        this._miscLocale = localeDataAll.misc;

        for (var tagIdx in data.tags) {
            //TODO: consider changing this to an object instead of an array
            var tagObjs = _.filter(tags, function (tag) {
                return (tag.getId() === data.tags[tagIdx]);
            });

            if (tagObjs.length > 0) {
                this._tags.push(tagObjs[0]);
                tagObjs[0].addIssue(this);
            } else {
                var newTag = new TagModel(data.tags[tagIdx], localeDataAll);
                this._tags.push(newTag);
                newTag.addIssue(this);
                tags.push(newTag);
            }
        }
    };

    IssueModel.prototype.getParent = function () {
        return this._parent;
    };

    IssueModel.prototype.getParentId = function () {
        return this._parent._id;
    };

    IssueModel.prototype.getId = function () {
        return this._id;
    };

    IssueModel.prototype.getName = function () {
        return this._name;
    };

    IssueModel.prototype.getCssClass = function () {
        return this._name.toLowerCase().replace(/[\W_]+/g, '-');
    };

    IssueModel.prototype.getTitle = function () {
        return this._title;
    };

    IssueModel.prototype.getNarrative = function () {
        return this._narrative;
    };

    IssueModel.prototype.getMozActionCopy = function () {
        return this._mozActionCopy;
    };

    IssueModel.prototype.getYourActionCopy = function () {
        return this._yourActionCopy;
    };

    IssueModel.prototype.getMozActionLink = function () {
        return this._mozActionLink;
    };

    IssueModel.prototype.getYourActionLink = function () {
        return this._yourActionLink;
    };

    IssueModel.prototype.getInfographicType = function () {
        return this._infographicType;
    };

    IssueModel.prototype.getInfographicOverflow = function () {
        return this._infographicOverflow;
    };

    IssueModel.prototype.getInfographicIsMap = function () {
        return this._infographicIsMap;
    };

    IssueModel.prototype.getInfographic = function () {
        return this._infographic;
    };

    IssueModel.prototype.getTags = function () {
        return this._tags;
    };

    IssueModel.prototype.getRelated = function () {
        return this._parent.getIssues();
    };

    IssueModel.prototype.getStatus = function () {
        return this._status;
    };

    IssueModel.prototype.getStatusDescription = function () {
        var out = '';
        switch (this._status) {
        case 0:
            out = 'go';
            break;
        case 1:
            out = 'wait';
            break;
        case 2:
            out = 'stop';
            break;
        }
        return out;
    };

    IssueModel.prototype.getUrl = function () {
        return '/detail/' + this.getParentId() + '/' + this.getId();
    };

    IssueModel.prototype.getShareUrl = function () {
        return this._shareUrl;
    };

    IssueModel.prototype.getMiscLocale = function () {
        return this._miscLocale;
    };

    return IssueModel;
});
