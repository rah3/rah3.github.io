/* Final Assembly Script */

-- R2.5: Reset
DROP TABLE IF EXISTS songs;
DROP TABLE IF EXISTS cds;

-- 1. Create Staging Tables
CREATE TABLE master_cds (
    cd_id TEXT PRIMARY KEY NOT NULL,
    title TEXT NOT NULL, 
    artist TEXT NOT NULL,
    producer TEXT DEFAULT NULL, 
    year INTEGER, 
    contributer TEXT
);

CREATE TABLE master_songs (
    song_id INTEGER PRIMARY KEY AUTOINCREMENT, 
    title TEXT NOT NULL, 
    composer TEXT NOT NULL, 
    cd_id TEXT NOT NULL,
    track_number INTEGER NOT NULL, 
    contributer TEXT
);

-- 2. Process TA Files
-- Each .read MUST be on its own line with NO other text.

DROP TABLE IF EXISTS cds; 
DROP TABLE IF EXISTS songs;
.read myTunes_Abdelghny.sql

INSERT OR IGNORE INTO master_cds SELECT * FROM cds;
INSERT INTO master_songs (title, composer, cd_id, track_number, contributer) 
    SELECT title, composer, cd_id, track, contributer FROM songs;

DROP TABLE IF EXISTS cds; 
DROP TABLE IF EXISTS songs;
.read myTunes_Ali.sql

INSERT OR IGNORE INTO master_cds SELECT * FROM cds;
INSERT INTO master_songs (title, composer, cd_id, track_number, contributer) 
    SELECT title, composer, cd_id, track, contributer FROM songs;

DROP TABLE IF EXISTS cds; 
DROP TABLE IF EXISTS songs;
.read myTunes_Fatemeh.sql

INSERT OR IGNORE INTO master_cds SELECT * FROM cds;
INSERT INTO master_songs (title, composer, cd_id, track_number, contributer) 
    SELECT title, composer, cd_id, track, contributer FROM songs;

DROP TABLE IF EXISTS cds; 
DROP TABLE IF EXISTS songs;
.read myTunes_Monica.sql

INSERT OR IGNORE INTO master_cds SELECT * FROM cds;
INSERT INTO master_songs (title, composer, cd_id, track_number, contributer) 
    SELECT title, composer, cd_id, track, contributer FROM songs;

DROP TABLE IF EXISTS cds; 
DROP TABLE IF EXISTS songs;
.read myTunes_Rezieh.sql

INSERT OR IGNORE INTO master_cds SELECT * FROM cds;
INSERT INTO master_songs (title, composer, cd_id, track_number, contributer) 
    SELECT title, composer, cd_id, track, contributer FROM songs;

DROP TABLE IF EXISTS cds; 
DROP TABLE IF EXISTS songs;
.read myTunes_Saman.sql

INSERT OR IGNORE INTO master_cds SELECT * FROM cds;
INSERT INTO master_songs (title, composer, cd_id, track_number, contributer) 
    SELECT title, composer, cd_id, track, contributer FROM songs;

-- 3. Cleanup Orphans
DELETE FROM master_songs 
WHERE cd_id NOT IN (SELECT cd_id FROM master_cds);

-- 4. Final Rename
DROP TABLE IF EXISTS cds;
DROP TABLE IF EXISTS songs;
ALTER TABLE master_cds RENAME TO cds;
ALTER TABLE master_songs RENAME TO songs;

-- Final Verification
SELECT 'Final Song Count: ' || COUNT(*) FROM songs;
SELECT 'Final Orphan Count: ' || COUNT(*) FROM songs WHERE cd_id NOT IN (SELECT cd_id FROM cds);